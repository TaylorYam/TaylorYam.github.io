from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im # 如果沒有邊框，返回原圖

try:
    image_path = r"c:\Users\kelvi\.gemini\antigravity\scratch\personal_website\images\top_win_2_years.png"
    im = Image.open(image_path)
    print(f"Original size: {im.size}")
    
    # Trim
    im_trimmed = trim(im)
    print(f"Trimmed size: {im_trimmed.size}")
    
    # Save (Overwrite)
    im_trimmed.save(image_path)
    print("Successfully trimmed and saved image.")
except Exception as e:
    print(f"Error: {e}")
