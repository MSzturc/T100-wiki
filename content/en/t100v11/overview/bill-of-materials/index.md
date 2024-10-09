---
title: "Bill of Materials"
ogTitle: "BOM - THE 100 Build Guide"
description: "What to buy before you can build THE 100 v1.1 3d printer"
lead: ""
date: 2023-07-11T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  t100v10:
    parent: "overview-v11"
    identifier: "bom-v11"
weight: 80
toc: true
doc: t100v10
images: 
  - images/tfd_bom_preview.png
---
# Bill of Materials

The printhead, frame, gantry, and more are all 3d printed parts. That's what makes this printer so awesome. But for obvious reasons there are still a number of items that need to be purchased. 

The official BOM is available <a href="https://docs.google.com/spreadsheets/d/1e5dhm4ck-dtci_GDkMuuwxgp788YJ5hdL6JvRKvF1Zc/edit#gid=0">here</a>. 

Some of the more expensive parts or more commonly asked about parts are (in no particular order):

  * Ender 2 Pro heated bed (yes, Ender 2. Not 3)
  * SKR Pico mainboard
  * Banana Pi M2 Zero
  * ~3KG of filament

I was able to purchase everything I needed off AliExpress. In the future I will post links to the companies I used but for now that's <a href="https://www.patreon.com/The100">a Patreon exclusive on Matt's Patreon</a> and I want to respect that.

## Warning
This entire guide is a major work-in-progress, but the BOM in particular is just now being started. Make sure you reference <a href="https://docs.google.com/spreadsheets/d/1e5dhm4ck-dtci_GDkMuuwxgp788YJ5hdL6JvRKvF1Zc/edit#gid=0">the official BOM</a> as well. The current revision of this guide is based on THE 100 v1.1-beta1. That means my counts for screws and heat inserts may be slightly off once v1.1-final is released. It should be very close though.

I will be updating this guide to reference v1.1-final once it is released.

## Fasteners / Hardware
Screw lengths can often be interchanged with one size up or down. For example you can almost always use an m3x10 where an m3x12 is called for. The sizes listed below are what I personally recommend, but you will find people using slightly different sizes in some cases. 

I have minimized different sizes as much as possible but I'd personally rather have the right size than to make something work. I will continue to minimize the different sizes if possible though.

### M2.5
ℹ️ M2.5 is only needed because the mounting holes on the BTT SKR Pico are M2.5. If you have another mounting solution, or you're willing to drill out the mounting holes on the board to fit M3, then you don't need these.
<div class="bd">
  <table class="table table-striped table-hover no-margin">
    <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col" width="10%">Qty</th>
      </tr>
    </thead>
    <tbody>
      <tr> <td>m2.5 nut</td> <td>12</td> </tr>
      <tr> <td>m2.5x40 screw</td> <td>4</td> </tr>
    </tbody>
  </table>
</div>

### M3
M3-sized fasteners make up the vast majority of what is needed to build the printer. 
<div class="bd">
  <table class="table table-striped table-hover no-margin">
    <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col" width="10%">Qty</th>
      </tr>
    </thead>
    <tbody>
      <tr> <td>m3 heat insert</td> <td>158</td> </tr>
      <tr> <td>m3 nut</td> <td>29</td> </tr>
      <tr> <td>m3 washer</td> <td>8</td> </tr>
      <tr> <td>m3x6 screw</td> <td>14</td> </tr>
      <tr> <td>m3x10 screw</td> <td>40</td> </tr>
      <tr> <td>m3x12 screw</td> <td>76</td> </tr>
      <tr> <td>m3x16 screw</td> <td>22</td> </tr>
      <tr> <td>m3x20 screw</td> <td>12</td> </tr>
      <tr> <td>m3x25 screw</td> <td>19</td> </tr>
      <tr> <td>m3x35 screw</td> <td>11</td> </tr>
      <tr> <td>m3x40 screw</td> <td>8</td> </tr>
    </tbody>
  </table>
</div>

### M5
M5-sized fasteners are primarily used for the belt-bearings to ride on. 
<div class="bd">
  <table class="table table-striped table-hover no-margin">
    <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col" width="10%">Qty</th>
      </tr>
    </thead>
    <tbody>
      <tr> <td>m5 washer</td> <td>14</td> </tr>
      <tr> <td>m5x30 screw</td> <td>4</td> </tr>
      <tr> <td>m5x40 screw</td> <td>2</td> </tr>
    </tbody>
  </table>
</div>


## Filament
ℹ️ Weights are for PLA based on a density of 1.24 g/cm<sup>3</sup>.
<div class="bd">
  <table class="table table-striped table-hover no-margin">
    <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col" width="30%">Qty</th>
      </tr>
    </thead>
    <tbody>
      <tr> <td>Single color</td> <td>3.4kg (3359g)</td> </tr>
      <tr> <td>-- OR --</td> <td></td> </tr>
      <tr> <td>Primary color (frame)</td> <td>1.7kg (1719g)</td> </tr>
      <tr> <td>Accent color (connectors)</td> <td>285g</td> </tr>
      <tr> <td>Other (use primary, accent, or other)</td> <td>1.4kg (1355g)</td> </tr>
    </tbody>
  </table>
</div>
<br><br>

##### Ordered everything you need?! <a href="/t100/1.1/printing-guide/toolhead/">Let's get printing</a>!