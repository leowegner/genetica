const fs = require('fs');
const path = require('path');

const imageDir = '/Users/LeoWegner/dev/Genética/assets/images';
const indexHtmlPath = '/Users/LeoWegner/dev/Genética/index.html';

console.log('Reading images from:', imageDir);

try {
    const files = fs.readdirSync(imageDir);
    const assets = {};

    files.forEach(file => {
        if (file.match(/\.(png|jpg|jpeg)$/)) {
            const filePath = path.join(imageDir, file);
            const buffer = fs.readFileSync(filePath);
            let ext = path.extname(file).substring(1);
            if (ext === 'jpg') ext = 'jpeg';
            
            const base64 = buffer.toString('base64');
            assets[file] = `data:image/${ext};base64,${base64}`;
            console.log(`Processed ${file}`);
        }
    });

    console.log(`Total images processed: ${Object.keys(assets).length}`);

    let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

    // Regex to find the ASSET_IMAGES constant
    // It looks for: const ASSET_IMAGES = { ... };
    // match recursively or non-greedy to catch the closing brace
    const regex = /const ASSET_IMAGES = \{[\s\S]*?\};/;
    
    if (indexHtml.match(regex)) {
        const newAssetContent = `const ASSET_IMAGES = ${JSON.stringify(assets, null, 4)};`;
        const newHtml = indexHtml.replace(regex, newAssetContent);
        
        fs.writeFileSync(indexHtmlPath, newHtml, 'utf8');
        console.log('Successfully updated index.html with new ASSET_IMAGES');
    } else {
        console.error('Could not find ASSET_IMAGES constant in index.html');
    }

} catch (err) {
    console.error('Error updating assets:', err);
}
