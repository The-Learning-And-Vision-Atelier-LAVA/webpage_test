from path import Path
import imageio
import cv2

imgs = Path('.').glob('*')
for img_path in imgs:
    if img_path.stem == 'resize':
        continue
    img = imageio.imread(img_path)
    h, w = img.shape[:2]
    if h/w >= 4/3:
        new_w = w
        new_h = int((w/3*4))
        img = img[int((h-new_h)/2): int((h-new_h)/2+new_h)]
    else:
        new_w = int((h/4*3))
        new_h = h
        img = img[:, int((w-new_w)/2): int((w-new_w)/2+new_w)]
    imageio.imwrite(img_path, img)
