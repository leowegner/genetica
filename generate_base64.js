const fs = require('fs');
const path = require('path');

const imageDir = '/Users/LeoWegner/dev/Genética/assets/images';
const files = fs.readdirSync(imageDir);
const styles = {};

files.forEach(file => {
    if (file.match(/\.(png|jpg|jpeg)$/)) {
        const filePath = path.join(imageDir, file);
        const buffer = fs.readFileSync(filePath);
        const ext = path.extname(file).substring(1).replace('jpg', 'jpeg'); // Normalize jpg to jpeg
        const base64 = buffer.toString('base64');
        styles[file] = `data:image/${ext};base64,${base64}`;
    }
});

console.log('const ASSET_IMAGES = ' + JSON.stringify(styles, null, 2) + ';');
