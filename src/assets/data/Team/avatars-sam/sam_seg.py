from path import Path
import imageio
import cv2
import numpy as np
from segment_anything import SamPredictor, sam_model_registry

sam = sam_model_registry["vit_h"](checkpoint="/home/kunbpc/Codes/semantic segmentation/segment-anything/ckpts/sam_vit_h_4b8939.pth")
predictor = SamPredictor(sam.cuda())

imgs = Path('.').glob('*')
for img_path in imgs:
    if img_path.stem == 'sam_seg':
        continue
    img = imageio.imread(img_path)
    # img = cv2.resize(img, (672, 896))
    # if img.shape[2] > 3:
    #     img = img[:, :, :3] * img[:, :, [3]]
    # img = img[..., :3]
    # h, w = img.shape[:2]
    # point_coords = []
    # point_coords = [[tmp_w, tmp_h] for tmp_w in [int(w//2)] for tmp_h in range(int(h//2), h, 50)]
    # point_coords += [[tmp_w, h - 10] for tmp_w in range(50, w-50, 50)]
    # # point_coords += [[0, 0], [0, w]]
    # point_coords = np.array(point_coords)
    # point_labels = np.ones(point_coords.shape[0])
    # # point_labels[-2:] = 0
    # predictor.set_image(img)
    # mask, _, _ = predictor.predict(point_coords, point_labels, multimask_output=False)
    # # mask = cv2.resize(mask[0].astype(np.uint8), (256, 256))[None]
    # # mask, _, _ = predictor.predict(mask_input=mask, multimask_output=False)
    #
    # mask = mask[0, ..., None]
    # img = mask * img + (1-mask)*255
    # imageio.imwrite(img_path, img.astype(np.uint8))

    img = cv2.resize(img, (672, 896))
    if img.shape[2] > 3:
        img = img[:, :, :3] * (img[:, :, [3]] > 1)
    h, w = img.shape[:2]

    point_coords = np.array([[0, 0], [0, w-0]])
    point_labels = np.ones(point_coords.shape[0])

    predictor.set_image(img)
    mask, _, _ = predictor.predict(point_coords, point_labels, multimask_output=False)

    kernel = np.ones((7, 7), np.uint8)
    dilation = cv2.dilate(mask[0].astype(np.uint8), kernel, iterations=1)
    erosion = cv2.erode(dilation, kernel, iterations=1)

    # mask = mask[0, ..., None]
    mask = erosion[..., None]

    img = (1 - mask) * img + mask * 255
    imageio.imwrite(img_path, img.astype(np.uint8))
