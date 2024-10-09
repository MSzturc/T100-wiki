---
title: "Bottom & back frames & bed build"
ogTitle: "Bottom & Back Frame & Bed Build - THE 100 Build Guide"
description: "How to build THE 100's v1.1 bottom frame, back frame, & gantry"
lead: ""
date: 2023-08-14T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  the100v11:
    parent: "build-v11"
weight: 520
toc: true
doc: the100v11
images: 
  - images/tfd_bottom_frame_preview.png
---
# Bottom and Back Frames & Bed

After completing this step you will have the entire frame of the printer complete! There is still plenty of work to go with the electronics, but this is nearly the end of the physical build. The back frame is one of the primary changes between v1.0 and v1.1. 

Visit the following print & purchase guides to see what you will need to complete this part of the build: 
  - <a href="/the100/1.1/printing-guide/bottom-frame/">bottom frame</a>
  - <a href="/the100/1.1/printing-guide/back-frame/">back frame</a>
  - <a href="/the100/1.1/printing-guide/bed/">bed</a>

Then you should watch <a href="https://www.youtube.com/watch?v=EwaCh9CHoCc" target="_blank">Matt's video</a> for building the bottom frame (which includes the back frame and bed). This guide will simply function as a supplement to that video. 

## Notes on the video
The build video for the bottom frame is great and covers all steps well. 

## Tips
  - I created a remix of the cable guides (<a href="https://youtu.be/EwaCh9CHoCc?t=117" target="_blank">1:57</a>) that is split so you can run cabling without having to take the guide off the printer. It's also wider to ensure you can fit everything. <a href="https://www.printables.com/model/538043-split-cable-guide-organizer-for-the-100-v11" target="_blank">Available here</a>. 
  - I wasn't sure what size screws to get with the bed spring kit (used to attach the heated bed to the printed bed frame). I went with yellow springs and m4x40 screws. The screws were right and the size you want, but it took a LOT of force to get a tiny bit of thread to catch when using the yellow springs. I would recommend either getting something longer than 40mm, or don't use the yellow springs. I ended up switching to old factory springs from my Ender 3 Pro. 

## Fastener locations
The viewer below allows you to view the different parts and has them highlighted with different colors to indicate where various fasteners go.

Use the dropdown above the viewer to change between models.

<div class="row bd">
  🟢 indicates a screw (only highlighted where the screw head is visible)<br>
  🔵 indicates a nut<br>
  🔴 indicates a heat insert<br>
</div>
<br>

<div id="modelpicker">
</div>
<div id="stlviewer">
</div>



<!-- Import maps polyfill -->
<!-- Remove this when import maps will be widely supported -->
<script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>
<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@v0.155.0/build/three.module.js",
      "three/addons/": "https://unpkg.com/three@v0.155.0/examples/jsm/"
    }
  }
</script>

<script>
  const params = {
    asset: 'z_rod_clamp',
    STL: 'z_rod_clamp'
  };

    const assets = [
    'connector_z_rod',
    'z_coupler',
    'frame_back_left',
    'frame_back_right',
    'frame_front_left',
    'frame_front_right',
    'back_connector',
    'foot_with_clamp',
    'cable_guide_clamp',
    'connector_back',
    'frame_connector_front_1',
    'frame_connector_front_2',
    'frame_connector_left_1',
    'frame_connector_left_2',
    'frame_connector_right_1',
    'frame_connector_right_2'
  ];
</script>

<script type="module" src="/js/viewer.js"></script>