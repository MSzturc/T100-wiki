---
title: "Before you print"
description: "What to know before you start printing THE 100 3d printer"
lead: ""
date: 2023-06-18T14:41:39+01:00
lastmod: 2023-06-21T00:41:39+01:00
draft: false
images: []
type: docs
menu:
  the100v10:
    parent: "overview-v10"
    identifier: "before-you-print-v10"
weight: 70
toc: true
doc: the100v10
aliases:
  - /the100/overview/before-you-print/
---
# Before you start printing

The printhead, frame, gantry, and more are all 3d printed parts. That's what makes this printer so awesome. But for obvious reasons there are still a number of items that need to be purchased. 

The official BOM is available <a href="https://docs.google.com/spreadsheets/d/1qVG3n-1HVcA7c-vKpUakU7fWirMONmqOiJRv8SHPkTo/edit#gid=0">here</a>. I suggest reviewing it and confirming you can get everything you need prior to starting to print the parts. 

Some of the more expensive parts or more commonly asked about parts are (in no particular order):

  * Ender 2 Pro heated bed (yes, Ender 2. Not 3)
  * SKR Pico mainboard
  * Banana Pi M2 Zero
  * ~3KG of filament

I was able to purchase everything I needed off AliExpress. In the future I will post links to the companies I used.

## STL Links
Each part contains a link to the STL on GitHub and the STL on Printables. In nearly every case the filenames are different, and in a few cases there are parts differences between the two. I have included the filenames in the links to help you understand how the parts align between the two sources. Make sure to read the part notes if you're confused about a particular part. 

## Warning

The current revision of this guide is based on THE 100 v1.0. The biggest issue with that is I never actually printed v1.0. I support Matt on Patreon and through that I had access to newer parts and I printed those instead. The printer I made is much closer to v1.1 than it is v1. That means my counts for screws and heat inserts will be slightly off because I don't have an actual machine to compare them to. It also means I don't have any tips/tricks that are specific to v1.0 because I didn't print it.

I will be updating this guide to reference v1.1 parts but at the moment they're a Patreon exclusive so I won't be distributing them.

## Print settings

I printed all parts with a 0.6 nozzle using the <a href="https://github.com/MSzturc/the100#print-settings">recomended print settings</a> which are:

  * 0.25 Layer height
  * 0.5 Line width
  * 3 Top layers
  * 3 Bottom layers
  * 3 Walls
  * Grid Infill Pattern
  * 25% Infill
    * Use 30% infill for the print bed to move the center of gravity to where it's needed

## Additional info and support

This project wouldn't exist without Matt so I wanted to provide a list of links back to him and his resources:

  * <a href="https://github.com/MSzturc/the100">GitHub</a>
  * <a href="https://discord.gg/fW7BcUErgZ">Discord</a>
    * You can find me on here as `TheForgetfulDev`. Please reach out if you notice any issues with this guide or if you have any questions about the build.
  * <a href="https://www.patreon.com/The100">Patreon</a>
  * <a href="https://www.youtube.com/playlist?list=PLM01o_dfwbDcKYB-9yV0vLs5k0CrHUv0W">YouTube</a>
  * <a href="https://hackaday.io/project/190348-the-100-the-fastest-3d-printer">hackaday</a>


Ok, <a href="/the100/1.0/printing-guide/toolhead/">let's get printing</a>!