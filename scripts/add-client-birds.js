const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Client's bird list
const clientBirds = [
  'Hardhead',
  'Little Raven',
  'Australasian Swamphen',
  'Mallard',
  'Willie-Wagtail',
  'Pacific Black Duck',
  'Noisy Miner',
  'Eurasian Coot',
  'Australian Ibis',
  'Australian Wood Duck',
  'Rock Dove',
  'Silver Gull',
  'Masked Lapwing',
  'Crested Pigeon',
  'Common Myna',
  'Dusky Moorhen',
  'Little Black Cormorant',
  'Hoary-headed Grebe',
  'Domestic Goose',
  'Magpie-lark',
  'Rainbow Lorikeet',
  'Galah',
  'Australian Magpie',
  'Sulphur-crested Cockatoo',
  'Black-faced Cuckooshrike',
  'Sacred Kingfisher',
  'Red-rumped Parrot',
  'Grey Butcherbird',
  'Black-fronted Dotterel',
  'Kelp Gull',
  'Cape-barren Goose',
  'Pacific Gull',
  'Little Penguin',
  'Swamp Harrier',
  'Whistling Kite',
  'Tawny Frogmouth',
  'Bell Miner',
  'Little Wattlebird',
  'Powerful Owl'
];

// Generate random coordinates within Australia
function getRandomAustralianCoordinates() {
  // Australia bounds: lat -44 to -10, lng 113 to 154
  const lat = Math.random() * (-10 - (-44)) + (-44);
  const lng = Math.random() * (154 - 113) + 113;
  return { lat: parseFloat(lat.toFixed(6)), lng: parseFloat(lng.toFixed(6)) };
}

// Generate random date within the last 2 years
function getRandomDate() {
  const now = new Date();
  const twoYearsAgo = new Date(now.getFullYear() - 2, now.getMonth(), now.getDate());
  const randomTime = twoYearsAgo.getTime() + Math.random() * (now.getTime() - twoYearsAgo.getTime());
  return new Date(randomTime).toISOString();
}

// Get Australian location names
const australianLocations = [
  'Sydney, NSW',
  'Melbourne, VIC',
  'Brisbane, QLD',
  'Perth, WA',
  'Adelaide, SA',
  'Canberra, ACT',
  'Darwin, NT',
  'Hobart, TAS',
  'Gold Coast, QLD',
  'Newcastle, NSW',
  'Wollongong, NSW',
  'Geelong, VIC',
  'Townsville, QLD',
  'Cairns, QLD',
  'Toowoomba, QLD',
  'Ballarat, VIC',
  'Bendigo, VIC',
  'Albury, NSW',
  'Launceston, TAS',
  'Mackay, QLD'
];

function getRandomLocation() {
  return australianLocations[Math.floor(Math.random() * australianLocations.length)];
}

// Create placeholder photo URLs (replace with actual stock photos later)
function getPlaceholderPhotoUrl(birdName) {
  // Using a placeholder service that generates bird images
  const encodedName = encodeURIComponent(birdName);
  return `https://source.unsplash.com/400x300/?${encodedName},bird,australia`;
}

// Generate bird ID (using a hash of the bird name for consistency)
function generateBirdId(birdName) {
  let hash = 0;
  for (let i = 0; i < birdName.length; i++) {
    const char = birdName.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

// Create spottings for all client birds
function createClientSpottings() {
  const spottings = [];
  
  clientBirds.forEach(birdName => {
    const coords = getRandomAustralianCoordinates();
    const spotting = {
      id: uuidv4(),
      birdId: generateBirdId(birdName).toString(),
      birdName: birdName,
      latitude: coords.lat,
      longitude: coords.lng,
      date: getRandomDate(),
      notes: `Spotted this beautiful ${birdName} during a birding expedition. Amazing to see in its natural habitat!`,
      photos: [getPlaceholderPhotoUrl(birdName)],
      location: getRandomLocation(),
      instagramLink: 'https://www.instagram.com/birdingwithcob/'
    };
    spottings.push(spotting);
  });
  
  return spottings;
}

// Main function to add birds to spottings.json
async function addClientBirds() {
  const dataDir = path.join(__dirname, '..', 'data');
  const spottingsFile = path.join(dataDir, 'spottings.json');
  
  // Ensure data directory exists
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  // Load existing spottings
  let existingSpottings = [];
  if (fs.existsSync(spottingsFile)) {
    try {
      const data = fs.readFileSync(spottingsFile, 'utf-8');
      existingSpottings = JSON.parse(data);
    } catch (error) {
      console.error('Error reading existing spottings:', error);
    }
  }
  
  // Create new spottings for client birds
  const newSpottings = createClientSpottings();
  
  // Combine with existing spottings
  const allSpottings = [...existingSpottings, ...newSpottings];
  
  // Save to file
  try {
    fs.writeFileSync(spottingsFile, JSON.stringify(allSpottings, null, 2));
    console.log(`✅ Successfully added ${newSpottings.length} bird spottings!`);
    console.log(`📍 Total spottings in database: ${allSpottings.length}`);
    console.log('\n🐦 Added birds:');
    clientBirds.forEach((bird, index) => {
      console.log(`${index + 1}. ${bird}`);
    });
    console.log('\n📸 Note: Placeholder photo URLs used. Replace with actual stock photos as needed.');
    console.log('🔗 Instagram link set to: https://www.instagram.com/birdingwithcob/');
  } catch (error) {
    console.error('❌ Error saving spottings:', error);
  }
}

// Run the script
if (require.main === module) {
  addClientBirds();
}

module.exports = { addClientBirds, clientBirds };
