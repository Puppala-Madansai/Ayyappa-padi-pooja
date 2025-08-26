const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateIcon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Create circular background
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2, 0, 2 * Math.PI);
    ctx.fillStyle = '#ff9933'; // Ayyappa orange
    ctx.fill();
    
    // Add Ayyappa symbol
    ctx.fillStyle = '#d4af37'; // Gold
    ctx.font = `bold ${size * 0.4}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🛕', size/2, size/2);
    
    // Add border
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2, 0, 2 * Math.PI);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = Math.max(1, size / 32);
    ctx.stroke();
    
    // Save to file
    const buffer = canvas.toBuffer('image/png');
    const filename = `icon-${size}.png`;
    const filepath = path.join(__dirname, 'public', filename);
    
    fs.writeFileSync(filepath, buffer);
    console.log(`Generated ${filename}`);
}

async function generateAllIcons() {
    const sizes = [16, 32, 192, 512];
    
    for (const size of sizes) {
        await generateIcon(size);
    }
    
    console.log('All icons generated successfully!');
}

generateAllIcons().catch(console.error);
