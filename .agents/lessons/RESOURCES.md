# BAT4Blender Resources

## Knowledge

- [BAT4Blender README](https://github.com/memo33/BAT4Blender/blob/master/README.md)
  The add-on author's installation requirements, panel workflow, day/night options, preview guidance, and batch-render behavior. Use as the primary guide to the user-facing workflow.
- [BAT4Blender output-path implementation](https://github.com/memo33/BAT4Blender/blob/master/source/Utils.py#L31-L35)
  Shows that generated filenames are placed beside the saved `.blend` file. Use this when locating output files.
- [BAT4Blender render implementation](https://github.com/memo33/BAT4Blender/blob/master/source/GUI_ops.py#L51-L80)
  Defines the selected render modes and the sequence of zoom, rotation, and day/night passes.
- [fshgen releases](https://github.com/memo33/fshgen/releases)
  Author-maintained releases for converting exported BAT image and LOD files into an SC4Model. Use when enabling Post-Processing.
- [Blender Manual: Preferences](https://docs.blender.org/manual/en/latest/editors/preferences/index.html)
  Blender's official guide to application preferences, including add-on and extension settings. Use when the add-on installation UI differs by Blender version.
- [SimCity 4 Deluxe Edition manual transcription](https://archive.org/stream/SIMCITY_4_DELUXE_EDITION/SIMCITY_4_DELUXE_EDITION_djvu.txt)
  Original game manual covering the Universal Control Panel, city panels, and in-game tools. Use for SC4 interface terminology and control-group context.
- [MDN: `color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme)
  Explains how browsers adapt native controls and page chrome to a chosen scheme. Use with `prefers-color-scheme` when keeping the SC4 palette comfortable in light and dark modes.

## Wisdom (Communities)

- [BAT4Blender discussion on Simtropolis](https://community.simtropolis.com/forums/topic/763334-bat4blender/)
  Add-on discussion for BAT workflow questions and user experience.
