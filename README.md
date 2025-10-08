*A public repo ? why ? cuz I'm gonna share this with a friend*

# Jeet Davindra Boutique - Premium Fashion Website for this dude

A cinematic, luxury fashion boutique website built with React, featuring 3D animations, smooth transitions, and an immersive user experience for a guy i met online few months ago.

## 🎬 Features

- **Cinematic Opening Animation**: Smooth brand introduction sequence with elegant transitions
- **Smooth Page Transitions**: Movie-like flow between sections with no hard cuts
- **3D Animations**: Floating elements, parallax effects, and interactive hover states
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Premium UI/UX**: Luxury aesthetic with gold gradients and elegant typography
- **Interactive Elements**: Hover effects, micro-animations, and smooth scrolling
- **Theme Toggle**: Dark/Light mode support with smooth transitions
- **Professional Design**: Royal fonts and aesthetic layout

## 🖼️ Image Management

### Current Images Used:
- `hero-background.jpg` — Homepage main banner (Size: 1920x1080)  
  *Current: https://images.unsplash.com/photo-1649972904349-6e44c42644a7*
- `product1.jpg` — Silk Evening Gown (Size: 800x1000)  
  *Current: https://images.unsplash.com/photo-1649972904349-6e44c42644a7*
- `product2.jpg` — Designer Blazer (Size: 800x1000)  
  *Current: https://images.unsplash.com/photo-1581091226825-a6a2a5aee158*
- `product3.jpg` — Vintage Inspired Dress (Size: 800x1000)  
  *Current: https://images.unsplash.com/photo-1721322800607-8c38375eef04*
- `product4.jpg` — Premium Cocktail Dress (Size: 800x1000)  
  *Current: https://images.unsplash.com/photo-1506744038136-46273834b3fb*
- `product5.jpg` — Elegant Summer Collection (Size: 800x1000)  
  *Current: https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05*
- `about-boutique.jpg` — About Page, boutique interior (Size: 600x800)  
  *Current: https://images.unsplash.com/photo-1581091226825-a6a2a5aee158*
- `boutique-logo.png` — Website logo and favicon  
  *Current: /rein-uploads/466dcbac-5d8d-42fe-b808-be3216f8c54e.png*
- `reinhart-logo.png` — Developer logo  
  *Current: /rein-uploads/c6f7c311-00d7-4c9a-a539-d5199a99d0da.png*

### How to Change Images:

**Method 1: Using URLs (Current)**
1. Go to `/src/data/products.js`
2. Find the product object you want to update
3. Replace the `image` URL with your new image URL
4. For best results, use images with these dimensions:
   - Product images: 800x1000px (4:5 ratio)
   - Hero images: 1920x1080px (16:9 ratio)
   - About images: 600x800px (3:4 ratio)

**Method 2: Upload Local Images**
1. Create the images folder: `/public/images/`
2. Upload your images to `/public/images/`
3. Update the image path in your code:
   ```javascript
   // Instead of URL
   image: "https://example.com/image.jpg"
   
   // Use local path
   image: "/images/your-image.jpg"
   ```
4. **Important**: Name your images using lowercase letters and hyphens only
   - ✅ Good: `silk-evening-gown.jpg`
   - ❌ Bad: `Silk Evening Gown.jpg`

**Method 3: Upload to Rein-Uploads Folder**
1. Go to `/public/rein-uploads/`
2. Upload your images there
3. Reference them as: `/rein-uploads/your-image.jpg`

### Image Auto-Resizing
The website automatically handles different image ratios:
- **Product images** are cropped to 4:5 ratio (800x1000px equivalent)
- **Hero images** are cropped to 16:9 ratio (1920x1080px equivalent)  
- **About images** are cropped to 3:4 ratio (600x800px equivalent)
- Images maintain their aspect ratio and are centered within containers
- No manual resizing needed - upload any size image and it will display correctly

**Tip**: Always save image names lowercase and without spaces. Recommended format: `product-name1.jpg`

## 💰 Price & Product Management

### How to Edit Products:
1. Open `/src/data/products.js`
2. Find the product object:
```javascript
{
  id: 1,
  name: "fuck that bitch in Gown",
  price: "$299",
  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  category: "Evening Wear",
  description: "Luxurious silm and sweet bitch in silk evening gown with intricate beadwork"
}
```
3. Edit the `name`, `price`, `category`, or `description` fields
4. Save the file - changes will appear immediately

### Adding New Products:
1. Copy an existing product object in `/src/data/products.js`
2. Change the `id` to a unique number
3. Update all other fields with new product information
4. Add to the products array

## 🎨 Theme & Typography

### Current Fonts:
- **Headings**: Playfair Display (serif, elegant, royal)
- **Body Text**: Poppins (sans-serif, modern, clean)
- **Accents**: DM Serif Display (decorative, luxury)

### Theme Features:
- Dark/Light mode toggle in navigation
- Smooth theme transitions
- Professional color palette
- Gold gradient accents
- Glass morphism effects

## 🌐 Website Settings

- **Website Title**: Jeet Davindra Boutique
- **Browser Tab Title**: Fashion Boutique by Kiri
- **Favicon**: Boutique logo (red dress design)
- **Meta Description**: Premium Fashion Collection
- **Theme**: Supports dark/light mode with system preference detection

## 📱 Social Media Links

Current social media links (editable in `/src/data/products.js`):
- **Pinterest**: https://www.pinterest.com/davindraboutique007
- **Instagram**: https://www.instagram.com/tailoredbyjeet  
- **Twitter**: https://twitter.com/davindraboutique007

### Contact Information:
- **Address**: Bhikhiwind, opposite sewa Kendra, Khem Karn road, district Tarn Taran, pin code: 143303
- **Email**: JeetDavindraBoutique@gmail.com

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/Reinhart-py/Boutique.git
cd jeet-davindra-boutique
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open browser to `http://localhost:8080`

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling and animations
- **Framer Motion** - Advanced animations
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Lucide React** - Professional icons

## 📄 Pages

1. **Home** - Hero section with featured products and cinematic animations and ofcourse at the bottom it's my created with ❤️ by me and bleh bleh bleh and my portfolio link
2. **Collection** - Full product catalog with category filtering and 3D transitions , smooth and zakaas
3. **About** - Brand story timeline and values with visual storytelling
4. **Contact** - Professional contact form with business information

## 🎨 Customization

### Colors & Branding:
- Primary colors are defined in `tailwind.config.ts`
- Gold gradient: `from-gold-400 to-gold-600`
- Supports automatic dark/light theme switching

### Animations:
- Professional micro-animations throughout
- Framer Motion for complex sequences
- CSS-based animations for optimal performance
- Hover states and interactive elements

### UI Components:
- Glass morphism effects
- Luxury card designs
- Professional buttons with shimmer effects
- 3D social media icons
- Smooth theme transitions

## 📱 Mobile Optimization

- Fully responsive design across all breakpoints
- Touch-friendly interactions and gestures
- Optimized animations for mobile performance
- Adaptive navigation with mobile menu
- Theme toggle accessibility

## 🔧 Direct Link Access

The website includes a `_redirects` file that ensures:
- Direct links to any page work correctly
- No "Page Not Found" errors when landing on subpages
- Proper routing for single-page application behavior

So my flendo don't worry about shi and do what you want.

## 🎭 Professional Credits

**Created with ❤️ by [Reinhart / Kiri](https://reinlabs.netlify.app)**  
*Full-stack developer and UI/UX designer*

---

*This website represents the perfect blend of luxury fashion and smooth web technology, creatinga zakaas digital boutique experience that reflects the sophistication and elegance of the Jeet Davindra brand and it's all done by me ofcourse , your loved reinhart aka kiri or kai*
