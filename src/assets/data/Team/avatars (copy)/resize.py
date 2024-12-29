from path import Path
import imageio

imgs = Path('.').glob('*')
for img in imgs:
    if img.stem == 'resize':
        continue
    img = imageio.imread(img)
    h, w = img.shape
