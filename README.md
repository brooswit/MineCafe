# MineCafe
A 3D sandbox game built with three.js and node that may or may not have anything to do with mining...

MineCafe is built on node and the app is served to the client using express. The client is not required to download any software to play on the server.

## TODO:
- [x] Draw a voxel on the screen.
  - [x] World data structures
    - [x] World object that can hold chunks.
    - [x] Chunk object that can hold voxels.
    - [x] Voxel object.
  - [x] Basic graphics core.
    - [x] World drawer.
    - [x] Voxel drawer.
- [ ] First person controls.
  - [ ] Input System
    - [ ] Move with ASDW
    - [ ] Look with Mouse
    - [ ] Place blocks with left click
    - [ ] Remove blocks with right click
- [ ] World saving to flat file.
- [ ] UI
  - [ ] Main screen
  - [ ] Login
  - [ ] User login
  - [ ] Settings
  - [ ] Add console.
  - [ ] Administration panel.
  - [ ] Option for saving to MongoDB
- [ ] Multiplayer
  - [ ] Keep track of connected clients
  - [ ] Add chat
  - [ ] Keep current world state saved on server
  - [ ] Make server authorative
    - [ ] Disable world.force on clients.
    - [ ] Make client send requested changes to server instead of locally
    - [ ] Send world changes to all connected clients
  - [ ] Entity system
    - [ ] keep entity system synced between client and server 
  - [ ] Make player enttiy.
- [ ] More tiles
- [ ] More entitie types
- [ ] Plugins
- [ ] Master server reporting
- [ ] Cheater protection
