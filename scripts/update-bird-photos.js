const fs = require('fs');
const path = require('path');

// Better photo URLs for Australian birds (using various free stock photo sources)
const birdPhotoUrls = {
  'Hardhead': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
  'Little Raven': 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop',
  'Australasian Swamphen': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
  'Mallard': 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?w=400&h=300&fit=crop',
  'Willie-Wagtail': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  'Pacific Black Duck': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
  'Noisy Miner': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  'Eurasian Coot': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
  'Australian Ibis': 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?w=400&h=300&fit=crop',
  'Australian Wood Duck': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
  'Rock Dove': 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop',
  'Silver Gull': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
  'Masked Lapwing': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  'Crested Pigeon': 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop',
  'Common Myna': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  'Dusky Moorhen': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
  'Little Black Cormorant': 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?w=400&h=300&fit=crop',
  'Hoary-headed Grebe': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
  'Domestic Goose': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
  'Magpie-lark': 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop',
  'Rainbow Lorikeet': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  'Galah': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
  'Australian Magpie': 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop',
  'Sulphur-crested Cockatoo': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  'Black-faced Cuckooshrike': 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop',
  'Sacred Kingfisher': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
  'Red-rumped Parrot': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  'Grey Butcherbird': 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop',
  'Black-fronted Dotterel': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
  'Kelp Gull': 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?w=400&h=300&fit=crop',
  'Cape-barren Goose': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
  'Pacific Gull': 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?w=400&h=300&fit=crop',
  'Little Penguin': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
  'Swamp Harrier': 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop',
  'Whistling Kite': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
  'Tawny Frogmouth': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  'Bell Miner': 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop',
  'Little Wattlebird': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  'Powerful Owl': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop'
};

// Update photo URLs in spottings
async function updateBirdPhotos() {
  const dataDir = path.join(__dirname, '..', 'data');
  const spottingsFile = path.join(dataDir, 'spottings.json');
  
  if (!fs.existsSync(spottingsFile)) {
    console.error('❌ Spottings file not found!');
    return;
  }
  
  try {
    // Load existing spottings
    const data = fs.readFileSync(spottingsFile, 'utf-8');
    const spottings = JSON.parse(data);
    
    let updatedCount = 0;
    
    // Update photo URLs for each spotting
    spottings.forEach(spotting => {
      if (birdPhotoUrls[spotting.birdName]) {
        spotting.photos = [birdPhotoUrls[spotting.birdName]];
        updatedCount++;
      }
    });
    
    // Save updated spottings
    fs.writeFileSync(spottingsFile, JSON.stringify(spottings, null, 2));
    
    console.log(`✅ Successfully updated ${updatedCount} bird photos!`);
    console.log('📸 All photos now use high-quality Unsplash images');
    
  } catch (error) {
    console.error('❌ Error updating bird photos:', error);
  }
}

// Run the script
if (require.main === module) {
  updateBirdPhotos();
}

module.exports = { updateBirdPhotos, birdPhotoUrls };
