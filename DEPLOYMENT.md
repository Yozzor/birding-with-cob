# WingQuest - Deployment Guide for Shared Hosting

## Overview
This guide explains how to deploy WingQuest to shared hosting (like Namecheap) using cPanel and File Manager.

## Prerequisites
- Shared hosting account with PHP support (7.4+)
- cPanel access
- File Manager access
- Domain or subdomain configured

## Deployment Steps

### 1. Build the Application
```bash
npm run build
npm run export  # If using static export
```

### 2. Prepare Files for Upload
The following files/folders need to be uploaded to your hosting:

**Required Files:**
- `out/` folder (if using static export) OR `build/` folder
- `public/api/upload-photo.php` - Photo upload handler
- `public/uploads/` folder - For storing uploaded photos
- `public/uploads/.htaccess` - Security configuration

### 3. Upload via cPanel File Manager

1. **Login to cPanel**
   - Access your hosting control panel
   - Open File Manager

2. **Navigate to public_html**
   - Go to your domain's public_html folder
   - Create a subfolder for your app (optional): `wingquest/`

3. **Upload Application Files**
   - Upload the built application files
   - Ensure `upload-photo.php` is in the correct location
   - Upload the `uploads/` folder with proper permissions

4. **Set Folder Permissions**
   - `uploads/` folder: 755 or 777 (depending on hosting)
   - `uploads/birds/` folder: 755 or 777
   - `upload-photo.php`: 644

### 4. Configure Environment Variables

Create a `.env` file in your application root:
```env
# Database (if using)
DATABASE_URL="your_database_connection_string"

# NextAuth (if using authentication)
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your_secret_key"

# Other environment variables as needed
```

### 5. Photo Upload Configuration

The photo upload system is designed for shared hosting:

**Features:**
- PHP-based upload handler (`upload-photo.php`)
- Automatic file validation (type, size)
- Secure filename generation
- Proper MIME type checking
- 5MB file size limit

**Supported Formats:**
- JPEG/JPG
- PNG
- WebP

**Security Features:**
- `.htaccess` protection in uploads folder
- File type validation
- Size limits
- No PHP execution in uploads directory

### 6. Testing the Deployment

1. **Access your application**
   - Visit your domain/subdomain
   - Test basic functionality

2. **Test photo upload**
   - Try adding a bird spotting with photo
   - Verify photos are saved to `uploads/birds/`
   - Check that photos display correctly

3. **Check error logs**
   - Monitor cPanel error logs for any issues
   - Verify PHP errors in hosting control panel

### 7. Troubleshooting

**Common Issues:**

1. **Photo upload fails**
   - Check folder permissions (755 or 777)
   - Verify PHP file upload settings
   - Check available disk space

2. **404 errors on API calls**
   - Ensure `upload-photo.php` is in correct location
   - Check file permissions (644)

3. **Images not displaying**
   - Verify correct path in database
   - Check `.htaccess` configuration
   - Ensure proper MIME types

**File Permissions:**
```
uploads/           755 or 777
uploads/birds/     755 or 777
upload-photo.php   644
.htaccess         644
```

### 8. Maintenance

**Regular Tasks:**
- Monitor disk space usage
- Clean up old/unused photos
- Check error logs
- Update application as needed

**Backup:**
- Regular database backups
- Backup uploaded photos
- Keep local copy of application code

## File Structure on Server

```
public_html/
├── wingquest/                 # Your app folder
│   ├── index.html            # Main app file
│   ├── _next/                # Next.js assets
│   ├── api/
│   │   └── upload-photo.php  # Photo upload handler
│   ├── uploads/
│   │   ├── .htaccess         # Security config
│   │   └── birds/            # Uploaded photos
│   └── ...other files
```

## Security Considerations

1. **File Upload Security**
   - Only allow image files
   - Validate file types server-side
   - Limit file sizes
   - Use secure filenames

2. **Directory Protection**
   - `.htaccess` prevents PHP execution in uploads
   - No directory browsing allowed
   - Proper file permissions

3. **Regular Updates**
   - Keep hosting environment updated
   - Monitor for security issues
   - Regular security audits

## Support

For deployment issues:
1. Check hosting provider documentation
2. Contact hosting support for server-specific issues
3. Review application logs for errors
4. Test locally before deploying changes
