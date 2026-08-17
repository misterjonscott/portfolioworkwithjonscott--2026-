import os
from PIL import Image

def convert_to_webp(root_folder):
    """
    Recursively converts all PNG, JPG, and JPEG images in a folder and its subfolders to WebP,
    preserving transparency.
    """
    for dirpath, dirnames, filenames in os.walk(root_folder):
        for filename in filenames:
            # Check for image file extensions
            if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
                input_path = os.path.join(dirpath, filename)
                
                # Create the corresponding output folder structure
                relative_path = os.path.relpath(dirpath, root_folder)
                output_dir = os.path.join(root_folder, 'webp', relative_path)
                
                if not os.path.exists(output_dir):
                    os.makedirs(output_dir)

                try:
                    with Image.open(input_path) as img:
                        if img.mode != 'RGBA':
                            img = img.convert('RGBA')

                        name_without_ext = os.path.splitext(filename)[0]
                        output_path = os.path.join(output_dir, f"{name_without_ext}.webp")

                        # Save as lossless WebP to preserve transparency
                        img.save(output_path, 'webp', lossless=True, optimize=True)
                        print(f"✅ Converted: {input_path} -> {output_path}")

                except Exception as e:
                    print(f"❌ Failed to convert {input_path}: {e}")

if __name__ == "__main__":
    # The script will start scanning from the directory you run it from.
    # For example, if you run `python convert_images.py` from your project's root,
    # it will find all images in all subfolders.
    starting_directory = '.' # This represents the current directory
    convert_to_webp(starting_directory)