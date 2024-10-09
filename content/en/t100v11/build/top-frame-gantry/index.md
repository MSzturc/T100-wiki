---
title: "Top frame & gantry build"
ogTitle: "Top Frame and Gantry Build - THE 100 Build Guide"
description: "How to build THE 100's v1.1 top frame & gantry"
lead: ""
date: 2023-08-14T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  t100v10:
    parent: "build-v11"
weight: 515
toc: true
doc: t100v10
images: 
  - images/tfd_top_frame_preview.png
---
# Top Frame and Gantry Build

The top frame holds the toolhead, A/B (aka X/Y) motors, extruder, and extruder motor. Getting this part right is critical for the rest of the printer. It's also fun because you will finally get a sense of how the printer will look.

Visit the <a href="/t100/1.1/printing-guide/top-frame/">print & purchase guide for the top frame</a> and for <a href="/t100/1.1/printing-guide/gantry/">the gantry</a> to see what parts you will need to complete this part of the build. 

Then you should watch <a href="https://www.youtube.com/watch?v=g_kgOLjIEg0" target="_blank">Matt's video</a> for building the top frame. This guide will simply function as a supplement to that video. 

## Notes on the video
  - Matt doesn't really cover what screws he uses in the top frame (they're mostly m3x12 btw). All necessary screws are noted in the <a href="/t100/1.1/printing-guide/top-frame/">print & purchase guide for the top frame</a>.
  - While giving a brief overview of where heat inserts go (<a href="https://youtu.be/g_kgOLjIEg0?t=114" target="_blank">1:54</a>), he skips over talking about a few spots. They're shown in the beginning montage but I wanted to mention the ones he doesn't point out:
    - Heat inserts on the back and side where the back frame pieces will attach
    - Heat inserts for the extruder mount
    - Heat inserts for the gantry carriages
  - There is an m3 nut that needs inserted in the belt fasteners BEFORE you insert the bearings (<a href="https://youtu.be/g_kgOLjIEg0?t=323" target="_blank">5:23</a>) because you can't fit it in after. If you don't get a tight fit on the nut then you may want to glue it in so it doesn't fall out before needed. 

## Tips
  - His tip in the video to use a screw to remove the rods if needed is a life saver (<a href="https://youtu.be/g_kgOLjIEg0?t=237" target="_blank">3:57</a>).
  - When you insert the m5 screw in the belt fastener (<a href="https://youtu.be/g_kgOLjIEg0?t=323" target="_blank">5:23</a>) you don't want the bottom of the screw sticking out of the bottom of the printed part. Just screw it in until the bottom of the screw is flush with the bottom of the part. You will have trouble inserting it in the frame later if it sticks out; there is plenty of extra room at the top where the bolt head is. 
  - Repeating what I said about the toolhead build: There are various qualities of drylins, and how they work with your linear rods will vary. I bought some that were so tight I could barely move them, and others that were super smooth but a bit loose. In the end I actually switched from drylins to linear bearings as I didn't mind the sound difference and they just worked better for me. 
  - It can be an extremely tight fit to get the x-axis linear rods inserted in to the gantry pieces (<a href="https://youtu.be/g_kgOLjIEg0?t=417" target="_blank">6:57</a> and <a href="https://youtu.be/g_kgOLjIEg0?t=445" target="_blank">9:06</a>). You really need to apply some force to get them inserted all the way. If you don't get them in far enough then you won't be able to get the gantry properly installed. On one of mine I actually used my soldering iron to heat up the end of the rod slightly so it would go in easier (do so at your own risk). If the rods that run in the y-axis (front to back) don't fully seat where they're supposed to go then you likely haven't gotten the x-axis rods fully inserted. It may be easier to take it out of the frame and get both sides really pushed in, then remove the rods from the gantry pieces (see the first tip at the top of this list!) and try installing in the frame again.
  - I mentioned in the toolhead build section that it won't be your last time building the toolhead. This also won't be your last time assembling the gantry as you often have to take the linear rods off to get the toolhead off for maintenance. Don't worry, it gets easier every time you do it. 

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
    asset: 'belt_fastener',
    STL: 'belt_fastener'
  };

    const assets = [
    'belt_fastener',
    'rod_holder',
    'connector_z',
    'back_left',
    'back_right',
    'front_left',
    'front_right',
    'connector_back_1',
    'connector_back_2',
    'connector_top_1',
    'connector_top_2',
    'connector_side_1',
    'connector_side_2'
  ];
</script>

<script type="module" src="/js/viewer.js"></script>
