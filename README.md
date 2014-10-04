Choreography Builder
====================

This is a javascript application, which builds a choreography via drag and drop.


Development
-----------

- Installation: ```npm install bower grunt-cli && npm install & bower install```
- Server: ```grunt server```
- Build:  ```grunt build```
- Test:   ```grunt test```

Goals
-----

- choreographies should be shareable
- moves should be easy to align
- moves should be extendable
- there should be smart suggestions for next moves
- there should be an error if moves aren't alignable


Todo
-----

- distinguish between different dances
- Save choreography, name it and start a new one
  - save it beneath the dances, so they can easily be switched
  - give WIP choreo a temporary name, so it can be autoselected at first
- Add comments to moves
  - add to move as such
  - can have a start and end beat
  - beats should be a dropdown with 1/8 timings
  - should be deletable (globally or locally)
