scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    music.play(music.stringPlayable("G G - - G G - - ", 120), music.PlaybackMode.LoopingInBackground)
    game.splash("CONGRATS! YOU GET SECRET ENDING")
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(true)
})
let mySprite = sprites.create(img`
    ...cccccccccccccccccc...
    ..cd5555555555555555dc..
    .c55555555555555555555c.
    .c55333333333333333355c.
    .c53333333333333333335c.
    .c53333333333333333335c.
    c333cccccccccccccccc333c
    c55c3555555555555553c55c
    c55c5555555555555555c55c
    c55c5555555555555555c55c
    c55c5555555555555555c55c
    c35c5555555555555555c53c
    cc33333333333333333333cc
    cc33333333333333333333cc
    cccccccccccccccccccccccc
    ..cbbc............cbbc..
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
game.splash("Welcome to Springfield")
forever(function () {
    // The Simpsons
    music.play(music.createSong(assets.song`The simpsons`), music.PlaybackMode.UntilDone)
})
