# About Lower the Curtains
When watching a movie with multiple monitors it can be cumbersome to turn them all off except for the primary monitor. If the monitors use Display Port it's even more annoying since it disconnects and rearranges the monitors. Even with Win + P it can make the wrong monitor the primary and force you to move all your windows back to the correct monitors. The goal of Lower the Curtains was to make it easy to make all monitors except the primary go dark at once. 

# Warning
Prolonged use of Lower the Curtain may potentially lead to unforeseen issues such as excess power use, screen burn-in, hardware strain, or other damage. This likely works better on OLEDS since all the pixels would turn off, thus saving power, but if you use another type of monitor keep in mind, it will still consume power and add excess wear. Some monitors are generally more susceptible to burn in, but it can happen to any monitor. Use at your own risk.

# Installation
## EXE
1. Move it to your desktop and launch it
2. To close simply right click the icon in the taskbar and close

## Unpacked
1. Move the files to a folder somewhere on your machine
2. Right click the EXE and create shortcut
3. Move the shortcut to your desktop
4. Launch the application
5. To close simply right click the icon in the taskbar and close

## Stream Deck
1. Follow the process for one of the above methods.
2. Create a multi action switch
3. Add an Open to the first action and point it to the program
4. Add a Close to the second action and point it to stream-deck-close.bat

# FAQ
## Can this work with Mac or Linux?
Yes, but I do not have either, so I can not compile them. If you have one of these machines then you can download the source and run one of the following commands.

`npm run build -- --mac`

`npm run build -- --linux`

## What's the difference between the EXE and unpacked versions?
The EXE is a portable version built using electron builder that packs all the files into an EXE.

## Why does the portable version open slow?
The portable version loads a bit slower due to needing to unpack everything. If you want it to be almost instant, then copy the contents of the unpacked version to a folder somewhere on your machine, then make a shortcut to it's EXE file and put it on your desktop.

# Icon
Icon was modified from the original computer-desktop icon on Heroicons.
