# Folder Structure to ASCII

Simple script that converts a folder structure to ASCII art.
Edit the `src/paths.json` file to change the folder structure. There is one there for you to look at for reference.
Here is an example line of the file:
```json
{ "path": "data/", "desc": "Usually contains configuration, or information you want to store." },
```
You can forego `desc` as it's optional.

You can view your recent export in the `./exports/` folder. (if there is not one it will be created on export)

You will need to install Bun to run this project. Install it here [Bun](https://bun.com)
Installing dependencies:
```bash
bun install
```
To run:
```bash
bun .
```

Im too lazy to make this a program so it's a TypeScript project run by Bun... Thanks @frostzzone for getting me into bun LMAO

This was used to make ASCII art for a Documentation (that isn't released yet) for CodenameEngine's Mod Folder Structure.

Here is what an export looks like:
```text
└─ 📂 My Mod/                                
   ├─ 📂 data/                                # Usually contains configuration, or information you want to store.
   │  ├─ 📂 characters/                       # Contains your Character's XML data.
   │  ├─ 📂 events/                           # Contains your Custom Events.
   │  │  ├─ 📄 Example Event.hx              
   │  │  ├─ 📄 Example Event.json            
   │  │  └─ 📄 Example Event.ui.json         
   │  ├─ 📂 config/                           # Configuration stuff.
   │  │  └─ 📄 modpack.ini                   
   │  ├─ 📂 dialogue/                        
   │  │  ├─ 📂 boxes/                        
   │  │  └─ 📂 characters/                   
   │  ├─ 📂 notes/                            # Custom NoteType Scripts (And adds them in the Charter!)
   │  │  └─ 📄 Example Note.hx               
   │  ├─ 📂 splashes/                        
   │  ├─ 📂 stages/                           # Where your Stage `.xml` and/or `.hx` file for your stage is located.
   │  ├─ 📂 states/                           # Scripts that run when States are switched to, or when loading a ModState!
   │  ├─ 📂 titlescreen/                     
   │  ├─ 📂 weeks/                           
   │  │  ├─ 📂 weeks/                        
   │  │  │  ├─ 📄 Example Week.xml           
   │  │  │  └─ 📂 characters/                
   │  │  ├─ 📂 characters/                   
   │  │  │  └─ 📄 Example Character.xml      
   │  │  └─ 📄 weeks.txt                     
   │  └─ 📄 global.hx                         # This script runs all the time, above any state switching, and never deloads (unless you switch mods).
   ├─ 📂 fonts/                              
   ├─ 📂 images/                             
   │  ├─ 📂 characters/                       # Contains your Character Spritesheet `.png` and `.xml` Animation.
   │  ├─ 📂 game/                             # Stuff usually found for global PlayState graphics.
   │  ├─ 📂 icons/                            # Where your Character's icons will be located.
   │  └─ 📂 stages/                           # Images of your stage can go here, but it's not required.
   ├─ 📂 languages/                           # Custom Languages support for your mod!
   │  └─ 📂 en/                               # The language you want to edit / create
   │     ├─ 📄 config.ini                    
   │     ├─ 📄 Editors.xml                   
   │     ├─ 📄 Main.xml                      
   │     └─ 📄 Options.xml                   
   ├─ 📂 music/                              
   ├─ 📂 shaders/                            
   ├─ 📂 songs/                               # Where songs are located, along with charts, events, scripts, audio, meta, etc.
   │  ├─ 📄 Example Global Song Script.hx     # Scripts inside the `./songs/` folder will load for every song.
   │  └─ 📂 example-song-here/               
   │     ├─ 📂 charts/                       
   │     │  └─ 📄 hard.json                  
   │     ├─ 📂 song/                          # Supports `Inst.ogg` / `Voices.ogg` and suffixes like `-bf`. Also supports difficulties.
   │     │  ├─ 📄 Inst.ogg                   
   │     │  ├─ 📄 Inst-hard.ogg              
   │     │  ├─ 📄 Voices-bf.ogg              
   │     │  ├─ 📄 Voices-bf-hard.ogg         
   │     │  ├─ 📄 Voices-dad.ogg             
   │     │  └─ 📄 Voices-dad-hard.ogg        
   │     ├─ 📂 scripts/                       # Scripts loaded for this specific song.
   │     ├─ 📄 events.json                   
   │     └─ 📄 meta.json                     
   ├─ 📂 sounds/                             
   ├─ 📂 source/                              # Custom Classes go here.
   └─ 📂 videos/                             
```