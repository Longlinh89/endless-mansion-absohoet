namespace SpriteKind {
    export const Specimen_1 = SpriteKind.create()
    export const Specimen_2 = SpriteKind.create()
    export const Goop = SpriteKind.create()
    export const Axe = SpriteKind.create()
    export const Specimen_3 = SpriteKind.create()
    export const Specimen_4 = SpriteKind.create()
    export const Specimen_5 = SpriteKind.create()
    export const Specimen_6 = SpriteKind.create()
    export const Specimen_7 = SpriteKind.create()
    export const Specimen_8 = SpriteKind.create()
    export const Specimen_9 = SpriteKind.create()
    export const Specimen_10 = SpriteKind.create()
    export const Specimen_11 = SpriteKind.create()
    export const Specimen_12 = SpriteKind.create()
    export const Man_Wander = SpriteKind.create()
    export const Specimen_13 = SpriteKind.create()
    export const Unknown_specimen_1 = SpriteKind.create()
    export const Unknown_specimen_2 = SpriteKind.create()
    export const Unknown_specimen_3 = SpriteKind.create()
    export const Unknown_specimen_4 = SpriteKind.create()
    export const Shadow_Animal = SpriteKind.create()
    export const Unknown_specimen_5 = SpriteKind.create()
    export const Monster_2 = SpriteKind.create()
    export const Monster_3 = SpriteKind.create()
    export const Monster_4 = SpriteKind.create()
    export const Monster_5 = SpriteKind.create()
    export const Monster_6 = SpriteKind.create()
    export const Husks = SpriteKind.create()
    export const Woormy_Charles = SpriteKind.create()
    export const Monster_1 = SpriteKind.create()
    export const Hooked_doll = SpriteKind.create()
}
function ben () {
    ben_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_6)
    specimen_6 = sprites.create(img`
        . 
        `, SpriteKind.Specimen_6)
    if (ben_chase) {
        timer.after(750, function () {
            tiles.placeOnRandomTile(specimen_6, assets.tile`myTile2`)
            specimen_6.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . a a a a a . . . . . . 
                . . . . a a . . . a . . . . . . 
                . . . . a . . . . a a . . . . . 
                . . . . a . . . . . a . . . . . 
                . . . . a . . . . a a . . a . . 
                . . . . a . . . . a . . . a . . 
                . . . . a a a a a a . . a a . . 
                . . . . . . a a . . . a a . . . 
                . 1 . . . . . a . a a a . . . . 
                . . e . . a a a a a . . . . . . 
                . . e a a a . a . . . . . . . . 
                . . e . . . . a a . . . . . . . 
                . . . e . a a . a a . . . . . . 
                . . . . a a . . . a a . . . . . 
                . . . a a . . . . . a a . . . . 
                `)
        })
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_11, function (sprite, otherSprite) {
    if (demon_cooldown) {
        health_player.value += -45
        demon_cooldown = false
        timer.after(3000, function () {
            demon_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "demon"
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monster_1, function (sprite, otherSprite) {
    if (guard_cooldown) {
        health_player.value += -45
        guard_cooldown = false
        timer.after(1000, function () {
            demon_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "guard"
    }
})
function taker () {
    TOTAKETHEDEAD = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff2222ff........
        .......f52222225f.......
        .......f22222222f.......
        ......f4222222224f......
        ......f4222222224f......
        ......f4442222444f......
        ......f545f44f545f......
        ......fe4ef22fe4ef......
        .......f5222222ffff.....
        ......fffe4525e222ef....
        ....f5222e5f5f25252f....
        ....f22252ffff5f5f4f....
        ....f5f5fffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Specimen_9)
    TOTAKETHEDEAD.setFlag(SpriteFlag.GhostThroughWalls, true)
    TOTAKETHEDEAD.setScale(2, ScaleAnchor.Middle)
    TOTAKETHEDEAD.setPosition(randint(400, 900), randint(400, 900))
    TOTAKETHEDEAD.follow(mySprite, 20000)
}
function security_guard () {
    guard_cooldown = false
    sprites.destroyAllSpritesOfKind(SpriteKind.Monster_1)
    if (guard_chase) {
        monster1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f e f 5 5 e e f e f . . . 
            . . . f e f e e e e f e f . . . 
            . . . f e f e e e e f e f . . . 
            . . f f f f a a a a f f f f . . 
            . . f f f f e e e e f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . . . f e e e e f . . . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Monster_1)
        tiles.placeOnRandomTile(monster1, assets.tile`myTile2`)
        monster1.setPosition(monster1.x, monster1.y + -32)
        timer.after(670, function () {
            guard_cooldown = true
            monster1.follow(mySprite, 120)
        })
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monster_5, function (sprite, otherSprite) {
    if (cow_cooldown) {
        health_player.value += -30
        cow_cooldown = false
        timer.after(3000, function () {
            cow_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "cow"
    }
})
function hooked_doll2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Hooked_doll)
    hooked_cooldown = false
    hooked_doll = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Hooked_doll)
    if (hooked_chase) {
        hooked_doll.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 f f f f f . . . . . 
            . . . . . f 1 d d f f . . . . . 
            . . . . . f 1 1 d f f . . . . . 
            . . 1 . . f d 1 1 d f . . . . . 
            . . . 1 . f d d 1 d f . 1 1 1 . 
            . . . f 1 f f f f 1 f 1 1 . . . 
            . . . f 1 f c 3 3 1 1 3 f . . . 
            . . . f 1 1 c 3 1 c f 1 f . . . 
            . . . f 3 1 3 1 3 3 f 3 1 . . . 
            . . . f 1 1 1 1 3 3 f c 1 1 . . 
            . . 1 1 3 f 1 3 c 3 f c f 1 . . 
            . . . f f f 1 f f f f f f . . . 
            . . . . . 1 b b b b f . . . . . 
            . . . . . 1 b b b b f . . . . . 
            . . . . . 1 1 f f f . . . . . . 
            `)
        tiles.placeOnRandomTile(hooked_doll, assets.tile`myTile0`)
        timer.after(1000, function () {
            hooked_cooldown = true
        })
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_3, function (sprite, otherSprite) {
    if (bug_cooldown) {
        health_player.value += -30
        bug_cooldown = false
        timer.after(1000, function () {
            bug_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "bug"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tick_rooms()
    info.changeScoreBy(1)
    rooms()
})
scene.onOverlapTile(SpriteKind.Specimen_3, assets.tile`myTile`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    bedroom_key = true
    mySprite.sayText("Bedroom key found!", 5000, false)
    tiles.setTileAt(location, assets.tile`myTile7`)
    victorian_mansion.removeAt(4)
    victorian_mansion.insertAt(4, tilemap`level29`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    book_secret = true
    mySprite.sayText("Book found!", 5000, false)
    tiles.setTileAt(location, assets.tile`myTile7`)
})
sprites.onOverlap(SpriteKind.Axe, SpriteKind.Unknown_specimen_3, function (sprite, otherSprite) {
    tiles.setWallAt(otherSprite.tilemapLocation(), false)
    sprites.destroy(otherSprite, effects.disintegrate, 100)
})
function update_chases () {
    if (gel_room > 0) {
        goop_chase = true
    } else {
        goop_chase = false
    }
    if (bug_room > 0) {
        bug_chase = true
    } else {
        bug_chase = false
    }
    if (ringu_room > 0) {
        ringu_chase = true
    } else {
        ringu_chase = false
    }
    if (bab_room > 0) {
        bab_chase = true
    } else {
        bab_chase = false
    }
    if (ben_room > 0) {
        ben_chase = true
    } else {
        ben_chase = false
    }
    if (wall_room > 0) {
        wall_chase = true
    } else {
        wall_chase = false
    }
    if (deer_room > 0) {
        deer_chase = true
    } else {
        deer_chase = false
    }
    if (parasite_room > 0) {
        parasite_chase = true
    } else {
        parasite_chase = false
    }
    if (demon_room > 0) {
        demon_chase = true
    } else {
        demon_chase = false
    }
    if (man_room > 0) {
        man_chase = true
    } else {
        man_chase = false
    }
    if (siren_room > 0) {
        siren_chase = true
    } else {
        siren_chase = false
    }
    if (tirsiak_room > 0) {
        forest_chase = true
    } else {
        forest_chase = false
    }
    if (face_room > 0) {
        face_chase = true
    } else {
        face_chase = false
    }
    if (otto_room > 0) {
        otto_chase = true
    } else {
        otto_chase = false
    }
    if (lisa_room > 0) {
        lisa_chase = true
    } else {
        lisa_chase = false
    }
    if (guard_room > 0) {
        guard_chase = true
    } else {
        guard_chase = false
    }
    if (bag_room > 0) {
        body_chase = true
    } else {
        body_chase = false
    }
    if (baby_room > 0) {
        head_chase = true
    } else {
        head_chase = false
    }
    if (hanged_room > 0) {
        hanged_chase = true
    } else {
        hanged_chase = false
    }
    if (cow_room > 0) {
        cow_chase = true
    } else {
        cow_chase = false
    }
    if (bekka_room > 0) {
        bekka_chase = true
    } else {
        bekka_chase = false
    }
    if (husks_room > 0) {
        husks_chase = true
    } else {
        husks_chase = false
    }
    if (charles_room > 0) {
        charles_chase = true
    } else {
        charles_chase = false
    }
    if (hooked_room > 0) {
        hooked_chase = true
    } else {
        hooked_chase = false
    }
}
function deathinsert5 () {
    death_quotes.insertAt(death_quotes.length, `Form within form writhes and pulses.
Skeletal sinews stretch outward from beneath the skin wrapped around it.
It pulls until the skin's elasticity fails ultimately.
From these small holes the tendrils of bone finally escape.
You are finally free of this constricted bag of flesh.`)
    death_quotes.insertAt(death_quotes.length, `A 'wicked nasty' child was thrown into a pit.
No food, light or water was ever given to it.
Punishment was dealt, without mercy or hesitation.
As if justified by faith, or ownership from creation.
It was no righteous act, it was hellish, demon sent.
Eventually all will find out, in eternal torment.`)
}
function enemy_remove_cherry_picking (enemy: string) {
    if (enemy != "gel") {
        gel_room = -100
    }
    if (enemy != "bug") {
        bug_room = -100
    }
    if (enemy != "ringu") {
        ringu_room = -100
    }
    if (enemy != "bab") {
        bab_room = -100
    }
    if (enemy != "ben") {
        ben_room = -100
    }
    if (enemy != "wall") {
        wall_room = -100
    }
    if (enemy != "deer") {
        deer_room = -100
    }
    if (enemy != "parasite") {
        parasite_room = -100
    }
    if (enemy != "demon") {
        demon_room = -100
    }
    if (enemy != "man") {
        man_room = -100
    }
    if (enemy != "siren") {
        siren_room = -100
    }
    if (enemy != "face") {
        face_room = -100
    }
    if (enemy != "otto") {
        otto_room = -100
    }
    if (enemy != "spooper") {
        spooper_room = -100
    }
    if (enemy != "tirsiak") {
        tirsiak_room = -100
    }
    if (enemy != "lisa") {
        lisa_room = -100
    }
    if (enemy != "guard") {
        guard_room = -100
    }
    if (enemy != "bag") {
        bag_room = -100
    }
    if (enemy != "baby") {
        baby_room = -100
    }
    if (enemy != "hanged") {
        hanged_room = -100
    }
    if (enemy != "cow") {
        cow_room = -100
    }
    if (enemy != "bekka") {
        bekka_room = -100
    }
    if (enemy != "husks") {
        husks_room = -100
    }
    if (enemy != "charles") {
        charles_room = -100
    }
    if (enemy != "hooked") {
        hooked_room = -100
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_5, function (sprite, otherSprite) {
    if (bab_cooldown) {
        health_player.value += -60
        bab_cooldown = false
        timer.after(3000, function () {
            bab_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "bab"
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_7, function (sprite, otherSprite) {
    health_player.value += -5
    kill_credit = "wall"
})
function save_file () {
    title.setText("YOUR SAVE FILE IS")
    title.setMaxFontHeight(0.1)
    title.x += 10
    title.y += 2
    title.setIcon(img`
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 1 1 2 . 2 1 1 2 . 2 1 1 2 . 
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 
        `)
    title.setOutline(1, 2)
    title2.setText("DELETED WHEN YOU DIE!")
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        caaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        caaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        caaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        caaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccc
        caaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccaaaaac
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccaaaaac
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccaaaaac
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaac
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaac
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaa
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaa
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaa
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaa
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaa
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccc
        cccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccc
        cccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccc
        cccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccc
        ccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccc
        ccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccc
        ccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccc
        ccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccc
        ccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaaaaaaaaccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccaaaaaaaaaacccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    save_file_menu = miniMenu.createMenu(
    miniMenu.createMenuItem("SAVE_FILE_1", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f f f . f f . . . . . . . 
        . . . f f . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("SAVE_FILE_2", img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f . . . . . . . f f f . . 
        . . . . . . . . . . f f f . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . f f f . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("SAVE_FILE_3", img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f . . . . . . . . f f . . 
        . . . . . . . . . . . f f f . . 
        . . . . . . . . . . f f f . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . . . . . f f f . . . 
        . . . . . . . . . . . f f f . . 
        . . f f . . . . . . . . f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `)
    )
    textSprite = textsprite.create("Hiscore", 0, 1)
    textSprite2 = textsprite.create("" + blockSettings.readNumber("hiscore"))
    textSprite.setPosition(132, 100)
    textSprite2.setPosition(132, 110)
    rooooooooom = sprites.create(img`
        . 
        `, SpriteKind.Food)
    save_file_menu.sayText("")
    rooooooooom.setPosition(50, 60)
    miniMenu.setFrame(save_file_menu, img`
        ..99999999999999999999..
        .9966666666666666666699.
        996661111111111111166699
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        996661111111111111166699
        .9966666666666666666699.
        ..99999999999999999999..
        `)
    save_file_menu.setPosition(50, 90)
    miniMenu.onButtonPressed(save_file_menu, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            game_save_file = 1
            game_yes()
        } else if (selectedIndex == 1) {
            game_save_file = 2
            game_yes()
        } else {
            game_save_file = 3
            game_yes()
        }
        miniMenu.close(save_file_menu)
    })
    miniMenu.onSelectionChanged(save_file_menu, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            rooooooooom.sayText("Current room: " + blockSettings.readNumber("save1"), 5000, false)
        } else if (selectedIndex == 1) {
            rooooooooom.sayText("Current room: " + blockSettings.readNumber("save2"), 5000, false)
        } else {
            rooooooooom.sayText("Current room: " + blockSettings.readNumber("save3"), 5000, false)
        }
    })
}
function rooms () {
    idle_timer = 300000
    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_9)
    allRoomsBelowThreshold()
    room_random()
    stamina_bar.value = 100
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.setWallAt(value, true)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`transparency16`)) {
        tiles.setTileAt(value2, assets.tile`myTile13`)
        tiles.setWallAt(value2, true)
    }
    if (info.score() <= 200 && info.score() != 0) {
        if (info.score() % 50 == 0) {
            save_room_elevator()
        }
    } else if (info.score() > 200) {
        if (info.score() % 100 == 0) {
            save_room_elevator()
        }
    }
    roll_chase()
    the_two_enemies_that_has_their_own_room()
    update_chases()
    summon()
}
function bug () {
    bug_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_3)
    specimen_3 = sprites.create(img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `, SpriteKind.Specimen_3)
    if (bug_chase) {
        timer.after(500, function () {
            specimen_3 = sprites.create(img`
                . . . . e e e e e e e . . . . . 
                . . . e e e b b b e e e . . . . 
                . . e e b e e b e b b e e . . . 
                . . e e b b e b e 2 b b e e . . 
                . e b b a 2 a e e b b b 5 e e . 
                e e a a a e b e b b b e 5 5 e . 
                e b b b b e a e e b b e b 5 5 e 
                e b b b b e e b b e a e b b 5 e 
                e b b b b e e e b e a a b b b e 
                e 5 5 b e e b e e b e a b b b e 
                . e 5 e e b b b e e e a b b b e 
                . e e e b b b b b e e e e 5 5 e 
                . . e e e b b b b e a 5 5 5 b e 
                . . . . e e e e e e a e e e e e 
                . . . . . . . e e e b b e e e . 
                . . . . . . . e . e e e e . . . 
                `, SpriteKind.Specimen_3)
            partbug1 = sprites.create(img`
                . . . . . . e e e e e . . . . . 
                . . . . e e 5 b b b e e . . . . 
                . . . e e 5 5 b b b a b e e . . 
                . . . e e e b b b b a b e e e . 
                . . e e b e e b b b a a b b e e 
                . . e b b b e e e e e b b e e e 
                . . e b b b b e e a b a e e b e 
                e e e b b b e e b e e e b b b e 
                . e e b b e e b b e b e e e b e 
                e e e e e e b e e b b b b b e e 
                e b a a e e e a a b b b b b e e 
                e b e 5 e a a a e e e b b e e . 
                e e e 5 e b b b b b 5 5 e e . . 
                . e e 5 5 b b b b 5 5 e e . . . 
                . e e b 5 b b b 5 5 e e . . . . 
                . . e e e e e e e e . . . . . . 
                `, SpriteKind.Food)
            partbug2 = sprites.create(img`
                . . . e e e e . e . . . . . . . 
                . e e e b b e e e . . . . . . . 
                e e e e e a e e e e e e . . . . 
                e b 5 5 5 a e b b b b e e e . . 
                e 5 5 e e e e b b b b b e e e . 
                e b b b a e e e b b b e e 5 e . 
                e b b b a e b e e b e e b 5 5 e 
                e b b b a a e b e e e b b b b e 
                e 5 b b e a e b b e e b b b b e 
                e 5 5 b e b b e e a e b b b b e 
                . e 5 5 e b b b e b e a a a e e 
                . e e 5 b b b e e a b a b b e . 
                . . e e b b b e b e b b e e . . 
                . . . e e b b e b e e b e e . . 
                . . . . e e e b b b e e e . . . 
                . . . . . e e e e e e e . . . . 
                `, SpriteKind.Food)
            partbug3 = sprites.create(img`
                . . . . . . e e e e e e e e . . 
                . . . . e e 5 5 b b b 5 b e e . 
                . . . e e 5 5 b b b b 5 5 e e . 
                . . e e 5 5 b b b b b e 5 e e e 
                . e e b b e e e a a a e 5 e b e 
                e e b b b b b a a e e e a a b e 
                e e b b b b b e e b e e e e e e 
                e b e e e b e b b e e b b e e . 
                e b b b e e e b e e b b b e e e 
                e b e e a b a e e b b b b e . . 
                e e e b b e e e e e b b b e . . 
                e e b b a a b b b e e b e e . . 
                . e e e b a b b b b e e e . . . 
                . . e e b a b b b 5 5 e e . . . 
                . . . . e e b b b 5 e e . . . . 
                . . . . . e e e e e . . . . . . 
                `, SpriteKind.Food)
            partbug1.follow(specimen_3, 130)
            partbug2.follow(partbug1, 110)
            partbug3.follow(partbug2, 90)
            tiles.placeOnRandomTile(specimen_3, assets.tile`myTile2`)
            for (let value3 of sprites.allOfKind(SpriteKind.Food)) {
                value3.setFlag(SpriteFlag.GhostThroughWalls, true)
                tiles.placeOnRandomTile(value3, assets.tile`myTile2`)
            }
        })
    }
}
function deer () {
    deer_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_8)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    if (deer_chase) {
        specimen8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Specimen_8)
        specimen8.follow(mySprite, 80)
        specimen8.setFlag(SpriteFlag.GhostThroughWalls, true)
        ring_deer = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Food)
        ring_deer.follow(specimen8, 100)
        ring_deer.setFlag(SpriteFlag.GhostThroughWalls, true)
        timer.after(750, function () {
            specimen8.setImage(img`
                . . b . . . . f f . . . . a . . 
                . . . a a . f f f f . a a . . . 
                . . . . . a f f f f a . . . . . 
                . . . . . f 1 f f 1 f . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . f a a f f f f a a f . . . 
                . . . f f a a a a a a f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . f f f f f f f f f f . . . 
                `)
            animation.runImageAnimation(
            ring_deer,
            [img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ..........ffffffff..............
                ..................ff............
                ...................fff..........
                .....................ff.........
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ....f...........................
                ....ff..........................
                .....f..........................
                ......f.........................
                .......ff.......................
                .........ff.....................
                ..........fff...................
                .............ffffff.............
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                `,img`
                ................................
                ................................
                ................................
                ................................
                .............ff.................
                ............ff..................
                ...........f....................
                ..........f.....................
                ..........f.....................
                .........f......................
                ........ff................f.....
                ........f.................f.....
                ........f.................f.....
                .......f..................f.....
                .......f..................f.....
                .......f..................f.....
                .......f..................f.....
                .......f..................f.....
                .......f.................f......
                ........................ff......
                ........................f.......
                .......................ff.......
                .......................f........
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                `,img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                .............ffffff.............
                ...................fff..........
                .....................ff.........
                .......................ff.......
                .........................f......
                ..........................f.....
                ..........................ff....
                ...........................f....
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                .........ff.....................
                ..........fff...................
                ............ff..................
                ..............ffffffff..........
                ................................
                ................................
                ................................
                ................................
                ................................
                `,img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ........f.......................
                .......ff.......................
                .......f........................
                ......ff........................
                ......f.................f.......
                .....f..................f.......
                .....f..................f.......
                .....f..................f.......
                .....f..................f.......
                .....f..................f.......
                .....f.................f........
                .....f.................f........
                .....f................ff........
                ......................f.........
                .....................f..........
                .....................f..........
                ....................f...........
                ..................ff............
                .................ff.............
                ................................
                ................................
                ................................
                ................................
                `],
            200,
            true
            )
            tiles.placeOnRandomTile(specimen8, assets.tile`myTile2`)
            tiles.placeOnRandomTile(ring_deer, assets.tile`myTile2`)
            deer_lines = [
            "Why do you run, child?",
            "Join us...",
            "Your flesh will sustain my children",
            "Praise be, Bayagototh",
            "Your submission is inevitable"
            ]
            specimen8.sayText(deer_lines._pickRandom(), 750, false)
        })
    }
}
function kill_credit_get () {
    if (kill_credit == "gel") {
        return 0
    } else if (kill_credit == "bug") {
        return 1
    } else if (kill_credit == "ringu") {
        return 2
    } else if (kill_credit == "bab") {
        return 3
    } else if (kill_credit == "ben") {
        return 4
    } else if (kill_credit == "wall") {
        return 5
    } else if (kill_credit == "deer") {
        return 6
    } else if (kill_credit == "taker") {
        return 7
    } else if (kill_credit == "parasite") {
        return 8
    } else if (kill_credit == "demon") {
        return 9
    } else if (kill_credit == "man") {
        return 10
    } else if (kill_credit == "siren") {
        return 11
    } else if (kill_credit == "face") {
        return 12
    } else if (kill_credit == "otto") {
        return 13
    } else if (kill_credit == "spooper") {
        return 14
    } else if (kill_credit == "tirsiak") {
        return 15
    } else if (kill_credit == "lisa") {
        return 16
    } else if (kill_credit == "guard") {
        return 17
    } else if (kill_credit == "bag") {
        return 18
    } else if (kill_credit == "baby") {
        return 19
    } else if (kill_credit == "hanged") {
        return 20
    } else if (kill_credit == "cow") {
        return 21
    } else if (kill_credit == "bekka") {
        return 22
    } else if (kill_credit == "husks") {
        return 23
    } else if (kill_credit == "charles") {
        return 24
    } else if (kill_credit == "hooked") {
        return 25
    } else {
        return -1
    }
}
function deathinsert3 () {
    death_quotes.insertAt(death_quotes.length, "DEATH IS NO ESCAPE")
    death_quotes.insertAt(death_quotes.length, "You suffered the bite of 87.")
    death_quotes.insertAt(death_quotes.length, `BEYOND THAT DOOR IS ANOTHER WORLD.
A WORLD MADE OF DREAMS...
A WORLD WHERE ALL YOUR FANTASIES HAVE COME TRUE.
A WORLD FULL OF EVERYONE'S SICK FANTASIES.
A WORLD LUSTING TO INCLUDE YOU.`)
    death_quotes.insertAt(death_quotes.length, "You were eaten by packs of wolves.")
    death_quotes.insertAt(death_quotes.length, `You cannot dream without darkness.
You cannot wake without pain.
Tear off your foolish disguise.`)
    death_quotes.insertAt(death_quotes.length, `I'm sorry. What am I doing? Why am I doing this?
I'm sorry. What is happening to me? Why can't I control myself?
I'm sorry. Why am I doing this?
I'm sorry. I'm so sorry.
Why is this happening to me?
Why can't I control myself?
I'm sorry.`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Husks, function (sprite, otherSprite) {
    if (husks_cooldown) {
        if (sprites.readDataBoolean(otherSprite, "stunned") == false) {
            health_player.value += -15
            husks_cooldown = false
            timer.after(5000, function () {
                husks_cooldown = true
            })
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
            kill_credit = "husks"
        }
    }
})
function mansion_navigate (room1: number, room2: number, pos1X: number, pos1Y: number, pos2X: number, pos2Y: number) {
    stamina_bar.value = 100
    if (victorian_room_number == room1) {
        tiles.setCurrentTilemap(victorian_mansion[room2])
        victorian_room_number = room2
        tiles.placeOnTile(mySprite, tiles.getTileLocation(pos2X, pos2Y))
    } else if (victorian_room_number == room2) {
        tiles.setCurrentTilemap(victorian_mansion[room1])
        victorian_room_number = room1
        tiles.placeOnTile(mySprite, tiles.getTileLocation(pos1X, pos1Y))
    }
}
function old_man () {
    old_man_stamina = 1555555555500
    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_12)
    man_cooldown = true
    old_man_found = false
    specimen12 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Specimen_12)
    if (man_chase) {
        tiles.placeOnRandomTile(specimen12, assets.tile`myTile2`)
        timer.after(780, function () {
            tiles.placeOnRandomTile(specimen12, assets.tile`myTile2`)
            old_man_stamina = 100
            specimen12.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f 5 5 4 4 f . . . . . 
                . . . . . f 5 4 4 4 f . . . . . 
                . . . . . f 4 4 4 4 f . . . . . 
                . . . . . f 4 4 4 4 f . . . . . 
                . . . f f f f f f f f f f . . . 
                . . . f e f c c c c f e b b . . 
                . . . f e f c c c c b 1 1 1 1 . 
                . . . f e f c c b b d e f 1 1 . 
                . . . f e f b b d c f e f 1 1 1 
                . . . f b b d c c c f e f . 1 1 
                . . b b d f f f f f f f f . 1 . 
                . b d . . f c c c c f . . 1 1 . 
                . . . . . f c c c c f . 2 1 . . 
                . . . . . f f f f f f . . . . . 
                `)
        })
    }
}
scene.onOverlapTile(SpriteKind.Shadow_Animal, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile49`)
    tiles.setWallAt(location, true)
})
function death_message () {
    death_quotes = []
    deathinsert1()
    deathinsert2()
    deathinsert3()
    deathinsert4()
    deathinsert5()
    death_quote_position = death_quotes[kill_credit_get()]
    game.showLongText(death_quote_position, DialogLayout.Full)
}
function bekka () {
    bekka_cooldown = true
    bekka_appear = false
    sprites.destroyAllSpritesOfKind(SpriteKind.Monster_6)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    monster6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Monster_6)
    if (bekka_chase) {
        timer.after(600, function () {
            bekka_appear = true
            monster6.setFlag(SpriteFlag.GhostThroughWalls, true)
            tiles.placeOnRandomTile(monster6, assets.tile`myTile1`)
        })
        bekka_apparition = sprites.create(img`
            ................................................................
            ................................................................
            ..............................................f.................
            ................................................................
            ............f...................................................
            ................................................................
            ......................................f..f......................
            .f.................f............................................
            ...............................ffff.............................
            .......................f........................................
            ...........................................................f....
            ................................................................
            ........................................................f.......
            ................................................................
            ................................................................
            ................................................................
            ................f...............................................
            .......f........................................................
            .......f........................................................
            .......f............................................f...........
            .......f....f...................................................
            .......f............................................f...........
            ......ff............................................f...........
            .......f............................................ff..........
            ......................................................f.........
            ......................................................ff........
            .........f.........f....................................f.......
            ........................................................f.......
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ..............f.................................................
            ................................................................
            .............................................f..................
            .....f..................................................f.......
            ................................................................
            ........................................................f.......
            ................................................................
            .........f...............................................f......
            ................................................................
            ................................................................
            .....f..........................................................
            ........f.......................................................
            ................................................................
            ................................................................
            ................................................................
            ......f.........................................................
            .......f........................................................
            ........f......f................................................
            ..f......f...............................f......................
            ..........f.....................................................
            ...........f..........................................f.........
            ............f...................................................
            .............f.........f........................................
            ...........ffff.........................f.....................ff
            ........f....f.f............................................ff..
            ................f.......................................f.ff....
            ............................f...........................ff......
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            `, SpriteKind.Food)
        bekka_apparition.setScale(2, ScaleAnchor.Middle)
        bekka_apparition.setFlag(SpriteFlag.GhostThroughWalls, true)
        bekka_apparition.follow(mySprite, 400)
        bekka_apparition.setPosition(mySprite.x, mySprite.y)
        bekka_apparition.z = 2322222
    }
}
function husks () {
    husks_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Husks)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    if (husks_chase) {
        for (let index = 0; index < 4; index++) {
            husks_doll = sprites.create(img`
                . . c c 3 5 . . 
                . . c 3 4 5 . . 
                . . 3 a 5 c . . 
                . c 3 a 3 b c . 
                . 3 a a 3 b c . 
                . a c 3 b 5 4 . 
                . . c b 5 5 . . 
                . . 3 b c c . . 
                `, SpriteKind.Husks)
            sprites.setDataNumber(husks_doll, "hp", randint(3, 5))
            tiles.placeOnRandomTile(husks_doll, assets.tile`myTile0`)
            sprites.setDataBoolean(husks_doll, "stunned", true)
        }
        timer.after(670, function () {
            for (let value4 of sprites.allOfKind(SpriteKind.Husks)) {
                value4.follow(mySprite, 30)
                sprites.setDataBoolean(value4, "stunned", false)
            }
        })
    }
}
scene.onOverlapTile(SpriteKind.Specimen_2, assets.tile`myTile`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile2`)
})
sprites.onOverlap(SpriteKind.Axe, SpriteKind.Specimen_3, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    stunned_bug = sprites.create(img`
        . . . . e e e e e e e . . . . . 
        . . . e e e b b b e e e . . . . 
        . . e e b e e b e b b e e . . . 
        . . e e b b e b e f b b e e . . 
        . e b b a f a e e f b b 5 e e . 
        e e a a a f b e b b f e 5 5 e . 
        e b b b b f a e e b f e b 5 5 e 
        e b b b b f e b b e a f b b 5 e 
        e b b b b f e e b e a f b b b e 
        e 5 5 b f e b e e b e f b b b e 
        . e 5 e f b b b e e e a f b b e 
        . e e e f b b b b e e e f 5 5 e 
        . . e e f b b b b e a 5 5 f b e 
        . . . f e e e e e e a e e f e e 
        . . . . . . . e e e b b e e f . 
        . . . . . . . e . e e e e . . . 
        `, SpriteKind.Food)
    stunned_bug.setPosition(otherSprite.x, otherSprite.y)
    partbug1.unfollow()
    partbug2.unfollow()
    partbug3.unfollow()
    timer.after(500, function () {
        otherSprite.setImage(img`
            . . . . e e e e e e e . . . . . 
            . . . e e e b b b e e e . . . . 
            . . e e b e e b e b b e e . . . 
            . . e e b b e b e 2 b b e e . . 
            . e b b a 2 a e e b b b 5 e e . 
            e e a a a e b e b b b e 5 5 e . 
            e b b b b e a e e b b e b 5 5 e 
            e b b b b e e b b e a e b b 5 e 
            e b b b b e e e b e a a b b b e 
            e 5 5 b e e b e e b e a b b b e 
            . e 5 e e b b b e e e a b b b e 
            . e e e b b b b b e e e e 5 5 e 
            . . e e e b b b b e a 5 5 5 b e 
            . . . . e e e e e e a e e e e e 
            . . . . . . . e e e b b e e e . 
            . . . . . . . e . e e e e . . . 
            `)
        otherSprite.setPosition(stunned_bug.x, stunned_bug.y)
        stunned_bug.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        partbug1.follow(specimen_3, 130)
        partbug2.follow(partbug1, 110)
        partbug3.follow(partbug2, 90)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    mansion_navigate(2, 4, 5, 3, 9, 8)
})
function woormy_charles () {
    charles_health = 10
    charles_gets_hit = true
    charles_cooldown = false
    charles_appear = false
    sprites.destroyAllSpritesOfKind(SpriteKind.Woormy_Charles)
    if (charles_chase) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Woormy_Charles)
        woormy_charles_doll = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Woormy_Charles)
        tiles.placeOnRandomTile(woormy_charles_doll, assets.tile`myTile2`)
        woormy_charles_doll.setPosition(woormy_charles_doll.x, woormy_charles_doll.y - 32)
        animation.runImageAnimation(
        woormy_charles_doll,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            `,img`
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . f . . . . . f . . . . . 
            `],
        250,
        false
        )
        timer.after(670, function () {
            charles_cooldown = true
            charles_appear = true
        })
    }
}
sprites.onOverlap(SpriteKind.Axe, SpriteKind.Specimen_10, function (sprite, otherSprite) {
    parasite_form_until_hit = false
    specimen10.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 f f 5 3 f . . . . . 
        . . . . . f 4 1 5 5 3 . . . . . 
        . . . . . 5 2 4 f 2 f . . . . . 
        . . . . . 5 2 2 1 2 5 . . . . . 
        . . . . . f 1 2 5 2 2 . . . . . 
        . . . . . f 3 b f 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    parasite_form = 2
})
function cardboard () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    specimen1 = sprites.create(img`
        ...............b................
        ...............b................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        bbb...........................bb
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...............b................
        ...............b................
        `, SpriteKind.Specimen_1)
    specimen1.setFlag(SpriteFlag.GhostThroughWalls, true)
    tiles.placeOnRandomTile(specimen1, assets.tile`myTile`)
}
sprites.onOverlap(SpriteKind.Axe, SpriteKind.Husks, function (sprite, otherSprite) {
    if (sprites.readDataBoolean(otherSprite, "stunned") == false) {
        otherSprite.follow(mySprite, 0)
        spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(mySprite, otherSprite), 100)
        sprites.setDataBoolean(otherSprite, "stunned", true)
        sprites.changeDataNumberBy(otherSprite, "hp", -1)
        timer.after(500, function () {
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(mySprite, otherSprite), 0)
            if (sprites.readDataNumber(otherSprite, "hp") > 0) {
                sprites.setDataBoolean(otherSprite, "stunned", false)
                otherSprite.follow(mySprite, 30)
            }
        })
        if (sprites.readDataNumber(otherSprite, "hp") > 2) {
            otherSprite.setImage(img`
                . . c c 3 5 . . 
                . . c 3 4 5 . . 
                . . 3 a 5 c . . 
                . c 3 a 3 b c . 
                . 3 a a 3 b c . 
                . a c 3 b 5 4 . 
                . . c b 5 5 . . 
                . . 3 b c c . . 
                `)
        } else if (sprites.readDataNumber(otherSprite, "hp") > 1) {
            otherSprite.setImage(img`
                . . c c 2 2 . . 
                . . c 2 2 5 . . 
                . . 2 2 5 c . . 
                . 2 2 a 3 b c . 
                . 3 a a 3 b 2 . 
                . a c 3 b 2 2 . 
                . . c 2 2 2 . . 
                . . 2 2 c c . . 
                `)
        } else if (sprites.readDataNumber(otherSprite, "hp") > 0) {
            otherSprite.setImage(img`
                . . 2 2 2 2 . . 
                . . 3 3 2 5 . . 
                . . 2 2 5 2 . . 
                . 2 2 a 2 2 c . 
                . 3 2 2 3 3 2 . 
                . 2 2 3 3 2 2 . 
                . . c 2 2 2 . . 
                . . 2 2 2 c . . 
                `)
        } else if (sprites.readDataNumber(otherSprite, "hp") <= 0) {
            otherSprite.setKind(SpriteKind.Food)
            animation.runImageAnimation(
            otherSprite,
            [img`
                . . 2 2 2 2 . . 
                . . 3 3 2 5 . . 
                . . 2 2 5 2 . . 
                . 2 2 a 2 2 c . 
                . 3 2 2 3 3 2 . 
                . 2 2 3 3 2 2 . 
                . . c 2 2 2 . . 
                . . 2 2 2 c . . 
                `,img`
                . . . . . . . . 
                . . 2 2 2 2 . . 
                . . 3 3 2 5 . . 
                . . 2 2 5 2 . . 
                . 2 2 a 2 2 c . 
                . 3 2 2 3 3 2 . 
                . 2 2 3 3 2 2 . 
                . . c 2 2 2 . . 
                `,img`
                . . . . . . . . 
                . . . . . . . . 
                . . 2 2 2 2 . . 
                . . 3 3 2 5 . . 
                . . 2 2 5 2 . . 
                . 2 2 a 2 2 c . 
                . 3 2 2 3 3 2 . 
                . 2 2 3 3 2 2 . 
                `,img`
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . 2 2 2 2 . . 
                . . 3 3 2 5 . . 
                . . 2 2 5 2 . . 
                . 2 2 a 2 2 c . 
                . 3 2 2 3 3 2 . 
                `,img`
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . 2 2 2 2 . . 
                . . 3 3 2 5 . . 
                . . 2 2 5 2 . . 
                . 2 2 a 2 2 c . 
                `,img`
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . 2 2 2 2 . . 
                . . 3 3 2 5 . . 
                . . 2 2 5 2 . . 
                `],
            70,
            false
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_8, function (sprite, otherSprite) {
    if (deer_cooldown) {
        health_player.value += -30
        deer_cooldown = false
        timer.after(3000, function () {
            deer_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "deer"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    parlor_key = true
    mySprite.sayText("Parlor key found!", 5000, false)
    tiles.setTileAt(location, assets.tile`myTile7`)
    victorian_mansion.removeAt(8)
    victorian_mansion.insertAt(8, tilemap`level32`)
})
sprites.onOverlap(SpriteKind.Axe, SpriteKind.Specimen_12, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f 2 1 . . . 
        . . . . . f 5 5 4 4 f . 1 1 . . 
        . . . . . f 5 4 4 4 f . . 1 . . 
        . . . . . f 4 4 4 4 f . . 1 1 . 
        . . . . . f 4 4 4 4 f . 1 1 1 . 
        . . . f f f f f f f f f 1 1 . . 
        . . . f e f c c c c 1 1 1 1 . . 
        . . . f e f c c c c b b f . . . 
        . . . f e f c c b b d e f . . . 
        . . . f e f b b d c f e f . . . 
        . . . f b b d c c c f f f . . . 
        . . b b d f f f f f f . . . . . 
        . b d . . f c c c c f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f f f f f f . . . . . 
        `)
    timer.after(500, function () {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f 5 5 4 4 f . . . . . 
            . . . . . f 5 4 4 4 f . . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f e f c c c c f e b b . . 
            . . . f e f c c c c b 1 1 1 1 . 
            . . . f e f c c b b d e f 1 1 . 
            . . . f e f b b d c f e f 1 1 1 
            . . . f b b d c c c f e f . 1 1 
            . . b b d f f f f f f f f . 1 . 
            . b d . . f c c c c f . . 1 1 . 
            . . . . . f c c c c f . 2 1 . . 
            . . . . . f f f f f f . . . . . 
            `)
    })
})
sprites.onOverlap(SpriteKind.Axe, SpriteKind.Specimen_6, function (sprite, otherSprite) {
    if (Math.percentChance(75)) {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        stunned_ben = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a a a . . . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . . . a a . . . . . a 
            . . . a a a . . . a . . . . a a 
            . a a a . a a a . a a . . a a . 
            . a . . . . . a . . a . a a . . 
            . a . . . . . a a a a a a . . . 
            . a . . . . . a a . a . . a . . 
            . a a . . . . a . . a a . a a . 
            . . a a a a a a . . . a . . a a 
            . . . . . . . . . . . a . . . a 
            `, SpriteKind.Food)
        stunned_ben.setPosition(otherSprite.x, otherSprite.y)
    } else {
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setPosition(sprite.x, sprite.y)
        timer.after(500, function () {
            otherSprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . a a a a a . . . . . . 
                . . . . 2 a . . . a . . . . . . 
                . . . . a . . . . a a . . . . . 
                . . . . a . . . . . a . . . . . 
                . . . . a . . . . a a . . a . . 
                . . . . a . . . . a . . . a . . 
                . . . . a a a a a a . . a a . . 
                . . . . . . a a . . . a a . . . 
                . 1 . . . . . a . a a a . . . . 
                . . e . . a a a a a . . . . . . 
                . . e a a a . a . . . . . . . . 
                . . e . . . . a a . . . . . . . 
                . . . e . a a . a a . . . . . . 
                . . . . a a . . . a a . . . . . 
                . . . a a . . . . . a a . . . . 
                `)
        })
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game_active) {
        if (xF == 0 && yF == 0) {
            if (canFight) {
                stamina_bar.value += -10
                canFight = false
                axe_weapon = sprites.create(img`
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    `, SpriteKind.Axe)
                axe_weapon.setPosition(mySprite.x, mySprite.y)
                axe_weapon.setFlag(SpriteFlag.GhostThroughWalls, true)
                timer.after(100, function () {
                    animation.runImageAnimation(
                    axe_weapon,
                    [img`
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e................................
                        ...............................e.....aa.........................
                        ...............................e...aaaa.........................
                        ...............................e.aaaaaf.........................
                        ...............................eaaaaaaa.........................
                        ...............................eaaaaaaa.........................
                        ...............................eaaaaaa1.........................
                        ...............................eaaaaaaa.........................
                        ...............................eaaaaaaa.........................
                        ...............................e.a1aaaf.........................
                        ...............................e....aaa.........................
                        ...............................e................................
                        ................................................................
                        ................................................................
                        ................................................................
                        `,img`
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        .....................aaaaaaaaaaaaaaaaaaaa.......................
                        ..................aaaaaaaaaaaaaaaaaaaaaaaaaaaa..................
                        ................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa..............
                        ...............aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.............
                        .............aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.............
                        ...........aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...........
                        .........aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...........
                        ........aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa..........
                        .......aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.........
                        .......aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.........
                        .......aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa........
                        ........aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa........
                        .........aaaaaaaaaaaaaaaaaaa........aaaaaaaaaaaaaaaaaaaaa.......
                        ..........aaaaaaaaaaaaa.................aaaaaaaaaaaaaaaaa.......
                        ..........aaaaaaaaaa.......bbbb...........aaaaaaaaaaaaaaaa......
                        ...........aaaaaaa.......bb...bbbbb..........aaaaaaaaaaaaa......
                        ..................................bbbb........aaaaaaaaaaaa......
                        ......................................bb.......aaaaaaaaaaaa.....
                        ........................................b.......aaaaaaaaaaa.....
                        ..eeeeeeeeeeeeeeeeeeeeeeeee..............bb......aaaaaaaaaa.....
                        .....aaaaa................................bb.....aaaaaaaaaa.....
                        ....aaaaaaa.................................b.....aaaaaaaaa.....
                        ....1aaaaaa.........b........................b.....aaaaaaaaa....
                        ....aaaaaaaa........b.........................b....aaaaaaaaa....
                        ...aaaaaaaaa........b.........................b....aaaaaaaaa....
                        ...aaaaaaaaaa.......b............d............b....aaaaaaaaa....
                        ...afaa1aafaa.......b..........ddddd...........b....aaaaaaaa....
                        ....................b.........dddddd...........b....aaaaaaaa....
                        ....................bb........dddddd...........b....aaaaaaaa....
                        ....................bb..........ddd.............b...aaaaaaaa....
                        .....aaaaaaaa.......bb..........................b...aaaaaaaa....
                        .....aaaaaaaaaa......b..........................b...aaaaaaaa....
                        .....aaaaaaaaaa......bb.........................b...aaaaaaaa....
                        .....aaaaaaaaaaa......b.........................b..aaaaaaaaa....
                        ....aaaaaaaaaaaa......b.........................b..aaaaaaaaa....
                        ....aaaaaaaaaaaaa......bb.......................b..aaaaaaaaa....
                        ....aaaaaaaaaaaaa........bb....................b..aaaaaaaaaa....
                        ....aaaaaaaaaaaaa.........bb...................b..aaaaaaaaa.....
                        ....aaaaaaaaaaaaaa.........bbb................bb.aaaaaaaaaa.....
                        ....aaaaaaaaaaaaaaa...........bb............bb...aaaaaaaaaa.....
                        ....aaaaaaaaaaaaaaa.............bb.........bb...aaaaaaaaaaa.....
                        ....aaaaaaaaaaaaaaa..............bbbbbbbbbbb....aaaaaaaaaaa.....
                        ....aaaaaaaaaaaaaaaa...........................aaaaaaaaaaa......
                        ....aaaaaaaaaaaaaaaaaaaa.....................aaaaaaaaaaaaa......
                        ....aaaaaaaaaaaaaaaaaaaaaaaa................aaaaaaaaaaaaaa......
                        ....aaaaaaaaaaaaaaaaaaaaaaaaaaa............aaaaaaaaaaaaaaa......
                        .....aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.......
                        .....aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.......
                        ......aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.......
                        .......aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa........
                        ........aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa........
                        ..........aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.........
                        ............aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa..........
                        ................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...........
                        .............................aaaaaaaaaaaaaaaaaaaaaa.............
                        ................................aaaaaaaaaaaaaaaa................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        `,img`
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ...eeeeeeeeeeeeeeeeeeeeeeeee....................................
                        ......aaaaa.....................................................
                        .....aaaaaaa....................................................
                        .....1aaaaaa....................................................
                        .....aaaaaaaa...................................................
                        ....aaaaaaaaa...................................................
                        ....aaaaaaaaaa..................................................
                        ....afaa1aafaa..................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        `,img`
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ...eeeeeeeeeeeeeeeeeeeeeeeee....................................
                        ......aaaaa.....................................................
                        .....aaaaaaa....................................................
                        .....1aaaaaa....................................................
                        .....aaaaaaaa...................................................
                        ....aaaaaaaaa...................................................
                        ....aaaaaaaaaa..................................................
                        ....afaa1aafaa..................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        `,img`
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        ................................................................
                        `],
                    100,
                    false
                    )
                    timer.after(200, function () {
                        sprites.destroy(axe_weapon)
                        canFight = true
                    })
                })
            }
        } else {
            if (stamina_bar.value > 0) {
                stamina_use = true
            } else if (stamina_bar.value <= 0) {
                stamina_use = false
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Unknown_specimen_2, function (sprite, otherSprite) {
    if (otto_cooldown) {
        health_player.value += -15
        otto_cooldown = false
        timer.after(3000, function () {
            otto_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "otto"
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Unknown_specimen_4, function (sprite, otherSprite) {
    if (tirsiak_cooldown) {
        health_player.value += -30
        tirsiak_cooldown = false
        timer.after(500, function () {
            tirsiak_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "tirsiak"
    }
})
function terminal_dolls (entry: string) {
    if (entry == "husks" || entry == "husk") {
        game.showLongText(`Husks
Known as: Husks
Species: Doll
Method: Unknown

Appear across the room. Hit them with the axe to stun them. Multiple hits kill.`, DialogLayout.Full)
        return true
    } else if (entry == "woormy charles") {
        game.showLongText(`Woormy Charles
Known as: Woormy Charles
Species: Doll
Method: Stretching

Becomes faster than you after waking. Leave the room fast.`, DialogLayout.Full)
        return true
    } else if (entry == "hooked doll") {
        game.showLongText(`Hooked Doll
Known as: Hooked Doll
Species: Doll
Method: Stabbing/Puncturing

A reverse weeping angel. If it is near your vision, it moves slowly.`, DialogLayout.Full)
        return true
    }
    return false
}
function room_random () {
    stamina_use = false
    if (room_type == 0) {
        roomRandom = [
        tilemap`level31`,
        tilemap`level38`,
        tilemap`level39`,
        tilemap`level40`,
        tilemap`level41`,
        tilemap`level42`,
        tilemap`level43`,
        tilemap`level51`
        ]
    } else if (room_type == 1) {
        roomRandom = [
        tilemap`level54`,
        tilemap`level55`,
        tilemap`level56`,
        tilemap`level57`,
        tilemap`level58`,
        tilemap`level59`,
        tilemap`level74`,
        tilemap`level75`
        ]
    } else if (room_type == 2) {
        roomRandom = [
        tilemap`level76`,
        tilemap`level77`,
        tilemap`level78`,
        tilemap`level79`,
        tilemap`level80`,
        tilemap`level81`,
        tilemap`level82`,
        tilemap`level83`
        ]
    } else if (room_type == 3) {
        roomRandom = [
        tilemap`level84`,
        tilemap`level85`,
        tilemap`level86`,
        tilemap`level87`,
        tilemap`level88`,
        tilemap`level89`,
        tilemap`level90`,
        tilemap`level91`
        ]
    }
    tiles.setCurrentTilemap(roomRandom._pickRandom())
}
scene.onOverlapTile(SpriteKind.Shadow_Animal, assets.tile`myTile2`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile0`)
    timer.after(5, function () {
        for (let value5 of tiles.getTilesByType(assets.tile`myTile49`)) {
            tiles.setTileAt(value5, assets.tile`myTile0`)
            tiles.setWallAt(value5, false)
        }
    })
})
function allRoomsBelowThreshold () {
    if (gel_room < 1 && bug_room < 1 && ringu_room < 1 && bab_room < 1 && ben_room < 1 && wall_room < 1 && deer_room < 1 && parasite_room < 1 && demon_room < 1 && man_room < 1 && siren_room < 1 && face_room < 1 && otto_room < 1 && (spooper_room < -5 || spooper_room == 0) && tirsiak_room < 1 && lisa_room < 1 && guard_room < 1 && bag_room < 1 && baby_room < 1 && hanged_room < 1 && cow_room < 1 && bekka_room < 1 && husks_room < 1 && charles_room < 1 && hooked_room < 1) {
        chase_picking_yippee = "horror"
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    if (parlor_key) {
        mansion_navigate(7, 9, 5, 1, 6, 14)
        if (victorian_room_number == 9) {
            mansion_man_search(6, 15, false)
        }
    }
})
function wall () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_7)
    if (wall_chase) {
        wall_rooms = [
        tilemap`level6`,
        tilemap`level11`,
        tilemap`level7`,
        tilemap`level8`,
        tilemap`level9`
        ]
        tiles.setCurrentTilemap(wall_rooms._pickRandom())
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        for (let value6 of tiles.getTilesByType(assets.tile`myTile4`)) {
            tiles.setWallAt(value6, true)
        }
        specimen7 = sprites.create(img`
            5555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444422222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444455555555555555
            5555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444422222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444455555555555555
            5555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444422222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444455555555555555
            5555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444422222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444455555555555555
            5555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444422222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444455555555555555
            5555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444422222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444455555555555555
            5555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444422222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444455555555555555
            5555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444422222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444455555555555555
            5555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444422222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444455555555555555
            5555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444422222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444455555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            5555555555444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            4444444444222222222222222222222222222222222444444444444444442222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            2222222222222222222222222222222222222222222222222222222222224444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444455555555555555554444444444444444455555555555555554444444444444444444444444444444
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444444444444444444444555555555555555555555555555555555444444444444444444444444444444444422222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            4444444444444444444444444442222222222222222444444444444444445555555555555555444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            2222222222222222222222222224444444444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222225555555555555555555555555555555554444444444444444422222222222222
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444444444444444444445555555555555555555555555555555554444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444444444444444444444422222222222222224444444444444444455555555555555555555555555555555544444444444444
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555444444444444444442222222222222222222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555555555555555555555555555555555555
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555554444444444444444444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444444444444455555555555555554444444444444444444444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            4444444444555555555555555555555555555555555222222222222222222222222222222222444444444444444442222222222222222222222222222222222222222222222222244444444444444442222222222222222222222222222222224444444444444444455555555555555555555555555555555544444444444444
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555554444444444444444222222222222222224444444444444444222222222222222224444444444444444222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555555555555555555555555555555555555555555555555555
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444442222222222222222444444444444444442222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444445555555555555555544444444444444444444444444444444444444444444444
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555555555555555555552222222222222222222222222222222222222222222222222444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555544444444444444442222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444422222222222222222222222222222222222222222222222
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            4444444444555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222222222222222224444444444444444444444444444444
            `, SpriteKind.Specimen_7)
        specimen7.setPosition(128, 384)
        timer.after(1000, function () {
            specimen7.setFlag(SpriteFlag.GhostThroughWalls, true)
            specimen7.setVelocity(0, -22)
        })
        siren_chase = false
        siren_room = -10
    }
}
sprites.onOverlap(SpriteKind.Axe, SpriteKind.Woormy_Charles, function (sprite, otherSprite) {
    if (charles_appear) {
        if (charles_gets_hit) {
            charles_gets_hit = false
            charles_appear = false
            charles_health += -1
            spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(mySprite, otherSprite), 100)
            if (charles_health <= 0) {
                spriteutils.setVelocityAtAngle(otherSprite, spriteutils.angleFrom(mySprite, otherSprite), 0)
                animation.runImageAnimation(
                woormy_charles_doll,
                [img`
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . f . f . . . . . . . 
                    . . . . . f . . . f . . . . . . 
                    . . . . f . . . . . f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . f f f f f . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . f . f . . . . . . . 
                    . . . . . f . . . f . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . 1 1 1 1 1 . . . . . 
                    . . . . . . . . f . . . . . . . 
                    . . . . . . . f f f . . . . . . 
                    . . . . . . . . f . . . . . . . 
                    . . . . . . . . f . . . . . . . 
                    . . . . . . . . f . . . . . . . 
                    . . . . . . . . f . . . . . . . 
                    . . . . . . . f . f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 1 1 1 . . . . . . 
                    . . . . . . . 1 1 1 . . . . . . 
                    . . . . . . . 1 1 1 . . . . . . 
                    . . . . . . . . f . . . . . . . 
                    . . . . . . . . f . . . . . . . 
                    . . . . . . . . f . . . . . . . 
                    . . . . . . . . f . . . . . . . 
                    . . . . . . . . f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 1 1 1 . . . . . 
                    . . . f f f f f 1 1 1 . . . . . 
                    . . . . . . . . 1 1 1 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                250,
                false
                )
            } else {
                timer.after(500, function () {
                    charles_gets_hit = true
                    charles_appear = true
                })
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    mansion_navigate(0, 1, 15, 11, 1, 11)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    mansion_navigate(11, 12, 1, 8, 14, 7)
})
function lisa () {
    lisa_observed = 1111111
    lisa_cooldown = true
    lisa_appear = false
    sprites.destroyAllSpritesOfKind(SpriteKind.Unknown_specimen_5)
    unknownspecimen5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Unknown_specimen_5)
    if (lisa_chase) {
        timer.after(1000, function () {
            lisa_observed = 50
            lisa_appear = true
            unknownspecimen5.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f f f 5 5 5 5 f . . . . . 
                . f f f f f 5 5 5 5 f . . . . . 
                f f f . . f 5 5 5 5 f . . . . . 
                f . . . . f 5 5 5 5 f . . . . . 
                . . . f f f f f f f f f f . . . 
                . . . f d f b b b b f d f . . . 
                . . . f d f b b b b f d f . . . 
                . . . f d f b b b b f d f . . . 
                . . . f d f b b b b f d f . . . 
                . . . f d f b b b b f d f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f d d d d f . . . . . 
                . . . . . f d d d d f . . . . . 
                . . . . . f f f f f f . . . . . 
                `)
            tiles.placeOnRandomTile(unknownspecimen5, assets.tile`myTile2`)
        })
        lisa_announcement = [
        "I've been watching you for a while now.",
        "Why even bother filling your lungs?",
        "You think you're clever, don't you?",
        "Do you feel safe?",
        "Only death will help you.",
        "Your blood smells so thick."
        ]
        lisa_apparition = textsprite.create(lisa_announcement._pickRandom(), 0, 1)
        lisa_apparition.setPosition(mySprite.x, mySprite.y)
        lisa_apparition.z = 1e+21
        lisa_apparition.follow(mySprite, 400)
        timer.after(500, function () {
            sprites.destroy(lisa_apparition)
        })
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goop, function (sprite, otherSprite) {
    gooped = true
})
function tirsiak () {
    tirsiak_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Unknown_specimen_4)
    sprites.destroyAllSpritesOfKind(SpriteKind.Shadow_Animal)
    if (forest_chase) {
        effects.blizzard.startScreenEffect(2000)
        timer.after(1000, function () {
            unknownspecimen4 = sprites.create(img`
                . . . e . . . . . . . . e . . . 
                . . . e . 1 1 1 1 1 . . e . . . 
                . . . . e 1 4 4 1 1 1 e . . . . 
                . . . 1 1 1 4 4 4 4 1 1 . . . . 
                . . . 1 1 f 4 4 4 4 f . . . . . 
                . 1 1 1 1 f 4 4 4 4 f . . . . . 
                1 1 1 f f f f f f f f f f . . . 
                1 . . f e f e e e e f e f . . . 
                . . . f e f e e e e f e f . . . 
                . . . f e f a a a a f e f . . . 
                . . . f e f a a a a f e f . . . 
                . . . f e f a a a a f e f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.Unknown_specimen_4)
            unknownspecimen4.setFlag(SpriteFlag.GhostThroughWalls, true)
            unknownspecimen4.follow(mySprite, 80)
            tiles.placeOnRandomTile(unknownspecimen4, assets.tile`myTile2`)
        })
        shadow_animal = sprites.create(img`
            ffbb......bbffb.................
            f99bb....bb999c.................
            f999bccccb9999c.................
            f9999bccb99999c.................
            f9999999999999c.................
            f9999999999999c.................
            f9999999999999c.................
            f9999999999999c........bbbbbb...
            f9999999999999c.......c999999bb.
            f9999999999999c.....c9999999999b
            f999999999999bc.....c9999999999b
            f999999999999bc.....c999dd99999b
            f999999999999bcc....cbddbbd9999c
            f99999999999999bbccccbbdbbb9999c
            f99999999999999999999999999b999c
            f99999999999999999999999999999c.
            f9999999999999999999999999999cc.
            f9999999999999999999999999999c..
            b9999999999999999999999999999c..
            f9999999999999999999999999999c..
            ff999999999999999999999999999c..
            .fb99999999999999999999999999c..
            ..fb9999999999999999999999999c..
            ...f99fffb9999ccccccccccb9999c..
            ...f99f..f999c.....f99f.c9999c..
            ...f99f..f999c.....f99f.cc9999c.
            ...f99f..f99c.......f9f..cc999c.
            ...f99f..f99c.......f99f..cc99c.
            ...f99f..f99c......f999f...c99c.
            ..f999f..f99c......ffff....cb9c.
            ..f99f..f999c.............c999c.
            ..ffff..f99cc.............c999c.
            `, SpriteKind.Shadow_Animal)
        shadow_animal.setFlag(SpriteFlag.GhostThroughWalls, true)
        tiles.placeOnRandomTile(shadow_animal, assets.tile`myTile0`)
        shadow_animal.setScale(3, ScaleAnchor.Middle)
        timer.after(10, function () {
            shadow_animal.setScale(0.5, ScaleAnchor.Middle)
            for (let value7 of tiles.getTilesByType(assets.tile`myTile49`)) {
                tiles.setTileAt(value7, assets.tile`myTile0`)
                tiles.setWallAt(value7, false)
            }
        })
    }
}
function parasite () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_10)
    parasite_form = 1
    parasite_cooldown = true
    parasite_form_until_hit = true
    specimen10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Specimen_10)
    specimen10.setPosition(-8000, -8000)
    if (parasite_chase) {
        timer.after(800, function () {
            parasite_form_until_hit = true
            parasite_form = 1
            specimen10.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f 3 f 5 5 5 . . . . . 
                . . . . . 3 5 5 5 5 5 . . . . . 
                . . . . . 5 5 5 5 5 f . . . . . 
                . . . . . f 4 4 2 2 b . . . . . 
                . . . . . f 4 2 2 5 3 . . . . . 
                . . . f f 5 5 5 3 3 f 5 f . . . 
                . . . 5 5 5 4 4 2 4 5 5 5 . . . 
                . . . b 4 2 2 2 5 5 5 5 f . . . 
                . . . 5 3 3 3 5 5 4 f 5 2 . . . 
                . . . 3 3 5 4 4 4 5 2 2 2 . . . 
                . . . f 4 5 5 5 5 2 2 3 3 . . . 
                . . . f 5 5 f f f 3 3 3 f . . . 
                . . . . . b 4 3 5 3 f . . . . . 
                . . . . . 5 3 3 2 5 5 . . . . . 
                . . . . . 3 2 2 5 5 f . . . . . 
                `)
            tiles.placeOnRandomTile(specimen10, assets.tile`myTile2`)
        })
    }
}
function extra_menu2 () {
    extra_menu = miniMenu.createMenu(
    miniMenu.createMenuItem("Terminal"),
    miniMenu.createMenuItem("Credits"),
    miniMenu.createMenuItem("Back")
    )
    miniMenu.setFrame(extra_menu, img`
        ..bbbbbbbbbbbbbbbbbbbb..
        .bd111111111111111111db.
        bd1dbbbbbbbbbbbbbbbbd1db
        b1dbbbbbbbbbbbbbbbbbbd1b
        b1bd1111111111111111db1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1bd1111111111111111db1b
        bd1bbbbbbbbbbbbbbbbbb1db
        bbd111111111111111111dbb
        .bbbbbbbbbbbbbbbbbbbbbb.
        ..bbbbbbbbbbbbbbbbbbbb..
        `)
    extra_menu.setPosition(80, 60)
    miniMenu.onButtonPressed(extra_menu, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            terminal_entry = game.askForString("ENTER ENTRY", 24)
            terminal_entry_get(terminal_entry)
        } else if (selectedIndex == 1) {
            game.showLongText("Original game Spooky's Jump Scare Mansion by LAG Studios, recreated by Longlinh. Many assets are from Makecode Arcade's asset library.  ", DialogLayout.Center)
        } else {
            game.reset()
        }
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_9, function (sprite, otherSprite) {
    health_player.value += -1034729752354
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    kill_credit = "taker"
})
function game_yes () {
    room_type = 0
    music.stopAllSounds()
    game_active = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    info.setScore(0)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f c f c c c c f c f . . . 
        . . . f c f c c c c f c f . . . 
        . . . f c f c c c c f c f . . . 
        . . . f c f c c c c f c f . . . 
        . . . f c f c c c c f c f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    init_rooms()
    canFight = true
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    health_player = statusbars.create(50, 4, StatusBarKind.Health)
    health_player.setBarBorder(1, 15)
    health_player.value = 100
    stamina_bar = statusbars.create(50, 4, StatusBarKind.Energy)
    stamina_bar.setBarBorder(1, 15)
    stamina_bar.value = 100
    health_player.setPosition(25, 2)
    stamina_bar.setPosition(25, 5)
    flashlightSpawn()
    if (game_save_file == 1) {
        if (blockSettings.readNumber("save1") > 0) {
            info.setScore(blockSettings.readNumber("save1"))
        } else {
            info.setScore(blockSettings.readNumber("skip"))
        }
    } else if (game_save_file == 2) {
        if (blockSettings.readNumber("save2") > 0) {
            info.setScore(blockSettings.readNumber("save2"))
        } else {
            info.setScore(blockSettings.readNumber("skip"))
        }
    } else if (game_save_file == 3) {
        if (blockSettings.readNumber("save3") > 0) {
            info.setScore(blockSettings.readNumber("save3"))
        } else {
            info.setScore(blockSettings.readNumber("skip"))
        }
    }
    rooms()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monster_6, function (sprite, otherSprite) {
    if (bekka_cooldown) {
        health_player.value += -30
        bekka_cooldown = false
        timer.after(3000, function () {
            bekka_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "bekka"
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monster_4, function (sprite, otherSprite) {
    if (hanged_cooldown) {
        health_player.value += -20
        otherSprite.unfollow()
        hanged_cooldown = false
        otherSprite.setPosition(mySprite.x, mySprite.y)
        timer.after(1000, function () {
            hanged_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "hanged"
    }
})
function body_bag () {
    bag_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Monster_2)
    monster2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Monster_2)
    if (body_chase) {
        tiles.placeOnRandomTile(monster2, assets.tile`myTile2`)
        timer.after(800, function () {
            monster2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f b b b b a . . . . . 
                . . . . f f e e e e a f . . . . 
                . . . . f f e e e e a f . . . . 
                . . . f f f e e e e f a f . . . 
                . . . f f f f f f f f f f . . . 
                . . . f a f e e e e f f f . . . 
                . . . f a f f e e f f f f . . . 
                . . . f f f f e e f f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . f a f f f f a f a f . . . 
                . . . f a a f f f a f a f . . . 
                . . . f a f f f f a f a f . . . 
                . . . . f f f f a f f f . . . . 
                . . . . f f f f f f f f . . . . 
                `, SpriteKind.Monster_2)
            tiles.placeOnRandomTile(monster2, assets.tile`myTile2`)
        })
    }
}
function terminal_monsters (entry: string) {
    if (entry == "monster 1" || entry == "security guard") {
        game.showLongText(`Monster 1
Known as: Security Guard
Species: Formerly Human
Method: Blunt Forces

It zooms at you in straight hallways. Cut corners.`, DialogLayout.Full)
        return true
    } else if (entry == "monster 2" || entry == "body bag") {
        game.showLongText(`Monster 2
Known as: Body Bag
Species: Undead Human/Parasite
Method: Unknown

Just a chaser. Run from it.`, DialogLayout.Full)
        return true
    } else if (entry == "monster 3" || entry == "baby head") {
        game.showLongText(`Monster 3
Known as: Baby Head
Species: Unknown
Method: Unknown

Very large. Goes through walls. Hit it with the axe to make it teleport.`, DialogLayout.Full)
        return true
    } else if (entry == "monster 4" || entry == "the hanged man" || entry == "hanged man") {
        game.showLongText(`Monster 4
Known as: The Hanged Man
Species: Human
Method: Clawing

A weeping angel. Goes through walls. Teleports away if watched for too long.`, DialogLayout.Full)
        return true
    } else if (entry == "monster 5" || entry == "ghost cow") {
        game.showLongText(`Monster 5
Known as: Ghost Cow
Species: Ghost
Method: Mind Control

Just a chaser. Run from it.`, DialogLayout.Full)
        return true
    } else if (entry == "monster 6" || entry == "bekka") {
        game.showLongText(`Monster 6
Known as: Bekka
Species: Ghost
Method: Unknown

Appears when you approach the exit and goes through walls. Then vanishes shortly after.`, DialogLayout.Full)
        return true
    }
    return false
}
function calculate_chance (room_number: number) {
    let rooms_since_last_chase = 0
    if (room_number < 50) {
        x_number = 0
        console.logValue("chance for a chase", "0%")
        return
    } else if (room_number == 122) {
        x_number = 10000
        console.logValue("chance for a chase", "100%")
        return
    }
    room_number = Math.round(room_number / 50) * 50
    t_number = (room_number - 50) / 10000
    t_number = Math.max(0, Math.min(1, t_number))
    // Smoothstep curve
    ease_number = 3 * t_number * t_number - 2 * t_number * t_number * t_number
    // Base chance out of 10000
    x_number = Math.round(ease_number * 10000)
    // Pity bonus:
    // +0.5% every 3-room roll without a chase
    x_number += rooms_since_last_chase * 75 + room_number * 2
    // Cap at 100%
    x_number = Math.min(10000, x_number)
    console.logValue("chance for a chase", "" + x_number / 100 + "%")
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    if (library_key) {
        mansion_navigate(7, 8, 1, 5, 14, 8)
        if (victorian_room_number == 9) {
            mansion_man_search(15, 8, false)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_2, function (sprite, otherSprite) {
    if (gel_cooldown) {
        health_player.value += -45
        gel_cooldown = false
        timer.after(3000, function () {
            gel_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "gel"
    }
})
function save_room_elevator () {
    tiles.setCurrentTilemap(tilemap`level60`)
    room_type = randint(0, 3)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    enemy_remove_cherry_picking("pentagram")
    update_chases()
    init_rooms()
    summon()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_4, function (sprite, otherSprite) {
    if (ringu_cooldown) {
        health_player.value += -45
        ringu_cooldown = false
        timer.after(3000, function () {
            ringu_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "ringu"
    }
})
sprites.onOverlap(SpriteKind.Axe, SpriteKind.Shadow_Animal, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.blizzard, 100)
    for (let value8 of tiles.getTilesByType(assets.tile`myTile49`)) {
        tiles.setTileAt(value8, assets.tile`myTile0`)
        tiles.setWallAt(value8, false)
    }
})
sprites.onOverlap(SpriteKind.Specimen_12, SpriteKind.Man_Wander, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    man_wander_target = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . d . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Man_Wander)
    tiles.placeOnRandomTile(man_wander_target, assets.tile`myTile7`)
    old_man_check = true
    scene.followPath(specimen12, scene.aStar(specimen12.tilemapLocation(), man_wander_target.tilemapLocation()), 60)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_1, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        . 
        `)
    jumpscare = sprites.create(img`
        . 
        `, SpriteKind.Food)
    jumpscare.setPosition(mySprite.x, mySprite.y)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    jumpscare.setImage(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 f 2 5 7 f 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 f 5 5 2 2 2 f 5 d e e 
        . b 3 2 3 5 f 5 3 2 f 5 d d e 4 
        . b 2 2 2 5 5 f f f 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `)
    jumpscare.setPosition(mySprite.x, mySprite.y)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hooked_doll, function (sprite, otherSprite) {
    if (hooked_cooldown) {
        health_player.value += -15
        hooked_cooldown = false
        timer.after(500, function () {
            hooked_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "hooked"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    mansion_navigate(0, 4, 8, 8, 5, 14)
})
function white_face () {
    face_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Unknown_specimen_1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    unknownspecimen1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Unknown_specimen_1)
    if (face_chase) {
        timer.after(650, function () {
            sprites.destroy(whice_face_apparition)
            sprites.destroyAllSpritesOfKind(SpriteKind.Unknown_specimen_1)
            face_speed = 1
            unknownspecimen1 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 1 1 1 1 1 1 1 . . . . 
                . . . . 1 1 1 1 1 1 1 1 1 . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                1 1 1 1 f f f 1 1 1 1 f f 1 1 . 
                1 1 1 1 f f f 1 1 1 f f f 1 1 . 
                . 1 1 1 f f f 1 1 1 f f f 1 1 . 
                . 1 1 1 f f 1 1 1 1 f f f 1 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 f 1 1 . 
                . . 1 1 f 1 1 1 1 1 f 1 f f 1 . 
                . . 1 1 f f 1 1 1 f f 1 1 f 1 . 
                . . 1 1 1 f f f f f 1 1 1 f . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                `, SpriteKind.Unknown_specimen_1)
            unknownspecimen1.setFlag(SpriteFlag.GhostThroughWalls, true)
            tiles.placeOnRandomTile(unknownspecimen1, assets.tile`myTile2`)
        })
        whice_face_apparition = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            1 1 1 1 f f f 1 1 1 1 f f 1 1 . 
            1 1 1 1 f f f 1 1 1 f f f 1 1 . 
            . 1 1 1 f f f 1 1 1 f f f 1 1 . 
            . 1 1 1 f f 1 1 1 1 f f f 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 f 1 1 . 
            . . 1 1 f 1 1 1 1 1 f 1 f f 1 . 
            . . 1 1 f f 1 1 1 f f 1 1 f 1 . 
            . . 1 1 1 f f f f f 1 1 1 f . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            `, SpriteKind.Food)
        whice_face_apparition.setFlag(SpriteFlag.GhostThroughWalls, true)
        animation.runImageAnimation(
        whice_face_apparition,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            1 1 1 1 f f f 1 1 1 1 f f 1 1 . 
            1 1 1 1 f f f 1 1 1 f f f 1 1 . 
            . 1 1 1 f f f 1 1 1 f f f 1 1 . 
            . 1 1 1 f f 1 1 1 1 f f f 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 f 1 1 . 
            . . 1 1 f 1 1 1 1 1 f 1 f f 1 . 
            . . 1 1 f f 1 1 1 f f 1 1 f 1 . 
            . . 1 1 1 f f f f f 1 1 1 f . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
        whice_face_apparition.setPosition(mySprite.x, mySprite.y)
        whice_face_apparition.follow(mySprite, 400)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    can_mansion = false
    if (exit_key) {
        tiles.setCurrentTilemap(tilemap`level4`)
        rooms()
        info.changeScoreBy(1)
    }
})
function settings_menu_ () {
    settings_menu = miniMenu.createMenu(
    miniMenu.createMenuItem("Volume", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f . f f f . 
        . . . . . . f f a a f . . . . . 
        . . . . f f a a b b f . . . . . 
        . . f f a a b b b b f . f f f . 
        . f a a b b b b b b f . . . . . 
        . f b b b b b b b b f . . . . . 
        . f b b b b b b b b f . f f f . 
        . f b b b b b b b b f . . . . . 
        . f b b b b b b b b f . . . . . 
        . f b b b b b b b b f . f f f . 
        . . f f b b b b b b f . . . . . 
        . . . . f f b b b b f . . . . . 
        . . . . . . f f b b f . f f f . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Message Toggle", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 5 . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . 5 5 . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . 5 . . . . . . . 5 5 . . . . 
        . . . . . . . . . 5 . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . 5 5 . . . . . 5 5 . . 
        . . . . . . . . . . . 5 5 . . . 
        . . . . . . . . . 5 5 . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Reset Data", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Room Skipping", img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f c f c c c c f c f . . . 
        . . . f c f c c c c f c f . . . 
        . . . f c f c c c c f c f . . . 
        . . . f c f c c c c f c f . . . 
        . . . f c f c c c c f c f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f f f f f f . . . . . 
        `),
    miniMenu.createMenuItem("Back", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . . . 
        . . . . 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    )
    miniMenu.setDimensions(settings_menu, 100, 100)
    settings_menu.setPosition(45, 82)
    miniMenu.setFrame(settings_menu, img`
        ..99999999999999999999..
        .9966666666666666666699.
        996661111111111111166699
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        996661111111111111166699
        .9966666666666666666699.
        ..99999999999999999999..
        `)
    miniMenu.onButtonPressed(settings_menu, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            volume_save = game.askForNumber("0 - 255", 3)
            if (volume_save < 0) {
                volume_save = 0
            } else if (volume_save > 255) {
                volume_save = 255
            }
            blockSettings.writeNumber("volume", volume_save)
        } else if (selectedIndex == 1) {
            message_toggle = game.askForNumber("Else to toggle on, 1 to toggle off.", 1)
            if (message_toggle == 1) {
                blockSettings.writeNumber("message", 1)
            } else {
                blockSettings.writeNumber("message", 0)
            }
        } else if (selectedIndex == 2) {
            data_reset_confirmation = game.askForString("TYPE \"RESET\" TO RESET DATA", 5)
            if (data_reset_confirmation == "RESET") {
                miniMenu.close(settings_menu)
                game.showLongText("As the memories fade away       My soul wanders into astray", DialogLayout.Center)
                music.play(music.createSoundEffect(WaveShape.Noise, 856, 785, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                blockSettings.clear()
            } else {
                game.splash("Memories persist.", "Memories persist.")
            }
        } else if (selectedIndex == 3) {
            room_skip = game.askForNumber("Enter room number that you want to skip to.", 4)
            blockSettings.writeNumber("skip", room_skip)
        } else {
        	
        }
        game.reset()
    })
}
scene.onOverlapTile(SpriteKind.Specimen_6, assets.tile`myTile`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile2`)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    stamina_use = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Unknown_specimen_1, function (sprite, otherSprite) {
    if (face_cooldown) {
        health_player.value += -30
        face_cooldown = false
        timer.after(1000, function () {
            face_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "face"
        spriteutils.placeAngleFrom(
        otherSprite,
        randint(0, 360),
        randint(100, 120),
        mySprite
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    exit_key = true
    mySprite.sayText("Exit key found!", 5000, false)
    tiles.setTileAt(location, assets.tile`myTile40`)
    victorian_mansion.removeAt(12)
    victorian_mansion.insertAt(12, tilemap`level34`)
})
sprites.onOverlap(SpriteKind.Axe, SpriteKind.Specimen_11, function (sprite, otherSprite) {
    spriteutils.placeAngleFrom(
    otherSprite,
    randint(0, 360),
    randint(100, 120),
    mySprite
    )
})
function siren () {
    siren_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_13)
    specimen13 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Specimen_13)
    if (siren_chase) {
        siren_rooms = [
        tilemap`level35`,
        tilemap`level13`,
        tilemap`level36`,
        tilemap`level37`
        ]
        tiles.setCurrentTilemap(siren_rooms._pickRandom())
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        for (let value9 of tiles.getTilesByType(assets.tile`myTile48`)) {
            tiles.setWallAt(value9, true)
        }
        timer.after(750, function () {
            player_on_crate = false
            specimen13.setFlag(SpriteFlag.GhostThroughWalls, true)
            animation.runImageAnimation(
            specimen13,
            [img`
                . . . . . . 8 8 8 8 8 8 . . . . 
                . . . . 8 8 8 6 9 9 9 6 8 8 . . 
                . . . 8 8 6 6 9 d d d 9 6 8 8 . 
                . . 8 8 6 . 9 d d . d d d 9 8 . 
                . . 8 6 6 9 d d . . . . d 9 8 . 
                . . 8 6 9 d d . . . . . d d 8 . 
                . . 8 6 9 d . . . . . . . d 8 . 
                . . 8 9 d d . . . . . . . d 8 . 
                . . 8 9 d . . . . . . . . d 8 . 
                . . 8 9 d . . . . . . . d d 8 . 
                . . 8 9 d d . . . . . d d 9 8 . 
                . . 8 9 . d . . . . d d . 8 8 . 
                . . 8 9 . d d d d d . . 9 8 . . 
                . . 8 9 6 . . . . . . 8 8 8 . . 
                . . 8 8 9 6 6 6 6 8 8 8 . . . . 
                . . . 8 8 9 8 8 8 8 9 . . . . . 
                `,img`
                . . . . . . . 8 8 8 . . . . . . 
                . . . . . 8 8 8 . . 8 8 8 . . . 
                . . . . 8 . 9 9 9 9 9 9 9 9 8 . 
                . . . 8 8 9 9 . d d d d d 9 9 8 
                . . . 9 9 . . d d . . . d . 9 9 
                . . 8 9 . d d . . . . . d . . 9 
                . . 8 9 d d . . . . . d . . 9 9 
                . . 8 9 d . . . . . d d . . 9 8 
                . . 8 9 d . . . . d d . . 9 9 . 
                . . 8 9 d d d d d d . . . 9 8 . 
                . . 8 . 9 . . . . . . 9 9 9 . . 
                . . 8 8 9 9 9 9 9 9 9 9 8 . . . 
                . . . 8 . . . . . . 8 8 . . . . 
                . . . 8 8 8 8 8 8 8 8 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 8 8 8 8 8 . . . . . 
                . . . . 8 8 6 6 6 6 8 8 . . . . 
                . . . 8 8 6 6 . 6 6 6 6 8 . . . 
                . . 8 8 . 6 . . 9 9 9 9 8 . . . 
                . . 8 . 6 . 9 9 d d . 9 8 . . . 
                . . 8 . 6 . 9 d . . d 9 8 . . . 
                . 8 . 6 6 9 d . . d 9 8 8 . . . 
                . 8 . 6 . 9 d d d d . 8 . . . . 
                . 8 8 6 . 9 . 6 9 9 8 . . . . . 
                . . 8 6 . 9 9 9 9 8 8 . . . . . 
                . . 8 6 6 6 6 . 8 8 . . . . . . 
                . . . 8 8 8 . 8 8 . . . . . . . 
                . . . . . 8 8 8 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 8 8 . . . . . . . . 
                . . . . . 8 6 6 8 8 . . . . . . 
                . . . . 8 6 6 . 8 . . . . . . . 
                . . . . 8 6 6 6 8 . . . . . . . 
                . . . . 8 6 6 8 8 . . . . . . . 
                . . . . 8 8 8 8 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            true
            )
            tiles.placeOnRandomTile(specimen13, assets.tile`myTile2`)
            water_where = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Man_Wander)
            tiles.placeOnRandomTile(water_where, assets.tile`myTile45`)
            wall_chase = false
            wall_room = -10
        })
    }
}
function gel () {
    gooped = false
    gel_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Goop)
    specimen2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Specimen_2)
    goop_puddle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Specimen_2)
    specimen2.setFlag(SpriteFlag.GhostThroughWalls, true)
    tiles.placeOnRandomTile(specimen2, assets.tile`myTile`)
    if (goop_chase) {
        gel_spawn = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.Goop)
        tiles.placeOnRandomTile(gel_spawn, assets.tile`myTile2`)
        gel_spawn.setFlag(SpriteFlag.GhostThroughWalls, true)
        animation.runImageAnimation(
        gel_spawn,
        [img`
            77..............................
            7.777...........................
            7....7..........................
            7.....77...........77....77.....
            7.......7cccccccccc....77.......
            7....cccc.77...7..c..77.7.......
            7..ccb......b.7...c77...7.....77
            .7c..bbbbbbb7bbbbbc.bb.7....777.
            .7cbbb7..7bb..77.cbbb777...7..7.
            .bc..b7.677.bb77cbbbcc767cc...7.
            .bc.7b666.7ccccccccccb7.6cccc.7.
            b.ccc6ccccccccccccccccccc667777.
            b..777b.77.c77cccc7b77ccc776.77.
            b.7.777b.77cbcccb7b7ccbc77.c6c7.
            .b.7777.bbbccc77b.ccccccccc..677
            7.b7..77bcccc7777cccbbcb7...7777
            777b77ccccccc7cccb777cb7b7777777
            777ccccccccccccc.7b77cbbb.77..77
            7.cbccb7ccc7ccc7777bcbb7bb..7.77
            cccc..7cc77ccb666666bbccccb..777
            7....cccbbcc.77bccc..cc77.cb..7.
            7..ccccccccccccccccccccccccccccc
            7.cc77cc.77cbcc77.bc.....cc.bb7.
            7cc7cc7777.ccbb7.7c.cc.ccc...bb.
            7c7c77.ccccccccccccccccc.....bb.
            77c....7......7c..bb7..bcc...bb.
            cc7...7.6....cc.....bb7.bbc..bb.
            ..7..7..6..cc.........bbb.bccbb.
            ..7.7..66.c..............bbbbcb.
            ..777..6cc......................
            cc.7.cc.........................
            ..ccc...........................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ..............cc................
            ...............7..c..77.........
            ............b.7...c77...7.......
            ..........bb7bbbbbc.bb.7........
            .........7bb..77.cbbb777...7....
            ......7.677.bb77cbbbcc767cc.....
            ......666.7ccccccccccb7.6cccc...
            ......ccccccccfcfffffcccc66777..
            .....7b.77.c7ffccc7bf7ccc776.7..
            .....77b.77cffccb7b7ccbc77.c6c..
            .....77.bbbcfc77b.ccccccccc..6..
            ......77bccff7777cccbbcb7...7...
            .....7cccccfc7cccb777cb7b7777...
            ....cccccccccccc.7b77cbbb.77....
            .....cb7ccc7ccc7777bcbb7bb..7...
            ......7cc77ccb666666bbccccb.....
            ......ccbbcc.77bccc..cc77.cb....
            ......ccccccccfccccccccccccc....
            .......c.77cbccff.bc.....cc.....
            .......777.ccbb7.7c.cc.ccc......
            ........cccccccccccccccc........
            ..............7c..bb7..b........
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ..............cc................
            ...............7..c..7..........
            ............b.7...c77...........
            ..........bb7bbbbbc.bb..........
            .........7bb..fcfffbb7..........
            .........77.bf7c77fbcc76........
            ..........7ccfc7c7fccb7.........
            ........cccccccc77fffcccc.......
            ........77.c7c7c7cfbf7ccc7......
            .........77ffcfcfcffccbc77......
            ........bbbfccc7ccf7fcccccc.....
            ........bccfcfc7c7c7fbcb7.......
            ........cccfcc7c77c7fcb7b777....
            ........cccfcc7c77ccfcbbb.77....
            ........cccccc7c77fccbb7bb......
            .........77cfcfcffffcbccccb.....
            .........bcc.c7c7fc..cc77.......
            ...........cccfccfcccccc........
            ............bcffc.bc............
            .............bb7.7c.............
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............fcfff.............
            .............f7c77f.............
            ............cfc7c7ff............
            .............ccc77fbf...........
            .............c7c7cf7cc..........
            ...........ffcfcfcffccc.........
            ...........fccc7ccf7fbc.........
            ...........fcfc7c7c7fcb.........
            ...........fcc7c77c7fc..........
            ...........fcc7c77ccf...........
            ...........ccc7c77fcc...........
            ...........cfcfcffffc...........
            .............c7c7f..............
            ..............fccf..............
            ..............ffc...............
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............fcfff.............
            .............f7c77f.............
            .............fc7c7f.............
            .............ccc77f.............
            .............c7c7cf.............
            ...........ffcfcfcff............
            ...........fccc7ccf7f...........
            ...........fcfc7c7c7f...........
            ...........fcc7c77c7f...........
            ...........fcc7c77ccf...........
            ...........ccc7c77fcc...........
            ...........cfcfcffffc...........
            .............c7c7f..............
            ..............fccf..............
            ..............ffc...............
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `],
        150,
        false
        )
        timer.after(750, function () {
            specimen2.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f c f f f . . . . . 
                . . . . . f 7 c 7 7 f . . . . . 
                . . . . . f c 7 c 7 f . . . . . 
                . . . . . c c c 7 7 f . . . . . 
                . . . . . c 7 c 7 c f . . . . . 
                . . . f f c f c f c f f . . . . 
                . . . f c c c 7 c c f 7 f . . . 
                . . . f c f c 7 c 7 c 7 f . . . 
                . . . f c c 7 c 7 7 c 7 f . . . 
                . . . f c c 7 c 7 7 c c f . . . 
                . . . c c c 7 c 7 7 f c c . . . 
                . . . c f c f c f f f f c . . . 
                . . . . . c 7 c 7 f . . . . . . 
                . . . . . . f c c f . . . . . . 
                . . . . . . f f c . . . . . . . 
                `)
            tiles.placeOnRandomTile(specimen2, assets.tile`myTile2`)
        })
        for (let index = 0; index < randint(1, 3); index++) {
            goop_puddle = sprites.create(img`
                77..............................
                7.777...........................
                7....7..........................
                7.....77...........77....77.....
                7.......7cccccccccc....77.......
                7....cccc.77...7..c..77.7.......
                7..ccb......b.7...c77...7.....77
                .7c..bbbbbbb7bbbbbc.bb.7....777.
                .7cbbb7..7bb..77.cbbb777...7..7.
                .bc..b7.677.bb77cbbbcc767cc...7.
                .bc.7b666.7ccccccccccb7.6cccc.7.
                b.ccc6ccccccccccccccccccc667777.
                b..777b.77.c77cccc7b77ccc776.77.
                b.7.777b.77cbcccb7b7ccbc77.c6c7.
                .b.7777.bbbccc77b.ccccccccc..677
                7.b7..77bcccc7777cccbbcb7...7777
                777b77ccccccc7cccb777cb7b7777777
                777ccccccccccccc.7b77cbbb.77..77
                7.cbccb7ccc7ccc7777bcbb7bb..7.77
                cccc..7cc77ccb666666bbccccb..777
                7....cccbbcc.77bccc..cc77.cb..7.
                7..ccccccccccccccccccccccccccccc
                7.cc77cc.77cbcc77.bc.....cc.bb7.
                7cc7cc7777.ccbb7.7c.cc.ccc...bb.
                7c7c77.ccccccccccccccccc.....bb.
                77c....7......7c..bb7..bcc...bb.
                cc7...7.6....cc.....bb7.bbc..bb.
                ..7..7..6..cc.........bbb.bccbb.
                ..7.7..66.c..............bbbbcb.
                ..777..6cc......................
                cc.7.cc.........................
                ..ccc...........................
                `, SpriteKind.Goop)
            tiles.placeOnRandomTile(goop_puddle, assets.tile`myTile0`)
        }
    }
}
sprites.onOverlap(SpriteKind.Axe, SpriteKind.Specimen_2, function (sprite, otherSprite) {
    gel_spawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Goop)
    gel_spawn.setPosition(otherSprite.x, otherSprite.y)
    animation.runImageAnimation(
    gel_spawn,
    [img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ..............fcfff.............
        .............f7c77f.............
        ............cfc7c7ff............
        .............ccc77fbf...........
        .............c7c7cf7cc..........
        ...........ffcfcfcffccc.........
        ...........fccc7ccf7fbc.........
        ...........fcfc7c7c7fcb.........
        ...........fcc7c77c7fc..........
        ...........fcc7c77ccf...........
        ...........ccc7c77fcc...........
        ...........cfcfcffffc...........
        .............c7c7f..............
        ..............fccf..............
        ..............ffc...............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ..............fcfff.............
        .............f7c77f.............
        .............fc7c7f.............
        .............ccc77f.............
        .............c7c7cf.............
        ...........ffcfcfcff............
        ...........fccc7ccf7f...........
        ...........fcfc7c7c7f...........
        ...........fcc7c77c7f...........
        ...........fcc7c77ccf...........
        ...........ccc7c77fcc...........
        ...........cfcfcffffc...........
        .............c7c7f..............
        ..............fccf..............
        ..............ffc...............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ..............cc................
        ...............7..c..7..........
        ............b.7...c77...........
        ..........bb7bbbbbc.bb..........
        .........7bb..fcfffbb7..........
        .........77.bf7c77fbcc76........
        ..........7ccfc7c7fccb7.........
        ........cccccccc77fffcccc.......
        ........77.c7c7c7cfbf7ccc7......
        .........77ffcfcfcffccbc77......
        ........bbbfccc7ccf7fcccccc.....
        ........bccfcfc7c7c7fbcb7.......
        ........cccfcc7c77c7fcb7b777....
        ........cccfcc7c77ccfcbbb.77....
        ........cccccc7c77fccbb7bb......
        .........77cfcfcffffcbccccb.....
        .........bcc.c7c7fc..cc77.......
        ...........cccfccfcccccc........
        ............bcffc.bc............
        .............bb7.7c.............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ..............cc................
        ...............7..c..77.........
        ............b.7...c77...7.......
        ..........bb7bbbbbc.bb.7........
        .........7bb..77.cbbb777...7....
        ......7.677.bb77cbbbcc767cc.....
        ......666.7ccccccccccb7.6cccc...
        ......ccccccccfcfffffcccc66777..
        .....7b.77.c7ffccc7bf7ccc776.7..
        .....77b.77cffccb7b7ccbc77.c6c..
        .....77.bbbcfc77b.ccccccccc..6..
        ......77bccff7777cccbbcb7...7...
        .....7cccccfc7cccb777cb7b7777...
        ....cccccccccccc.7b77cbbb.77....
        .....cb7ccc7ccc7777bcbb7bb..7...
        ......7cc77ccb666666bbccccb.....
        ......ccbbcc.77bccc..cc77.cb....
        ......ccccccccfccccccccccccc....
        .......c.77cbccff.bc.....cc.....
        .......777.ccbb7.7c.cc.ccc......
        ........cccccccccccccccc........
        ..............7c..bb7..b........
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        77..............................
        7.777...........................
        7....7..........................
        7.....77...........77....77.....
        7.......7cccccccccc....77.......
        7....cccc.77...7..c..77.7.......
        7..ccb......b.7...c77...7.....77
        .7c..bbbbbbb7bbbbbc.bb.7....777.
        .7cbbb7..7bb..77.cbbb777...7..7.
        .bc..b7.677.bb77cbbbcc767cc...7.
        .bc.7b666.7ccccccccccb7.6cccc.7.
        b.ccc6ccccccccccccccccccc667777.
        b..777b.77.c77cccc7b77ccc776.77.
        b.7.777b.77cbcccb7b7ccbc77.c6c7.
        .b.7777.bbbccc77b.ccccccccc..677
        7.b7..77bcccc7777cccbbcb7...7777
        777b77ccccccc7cccb777cb7b7777777
        777ccccccccccccc.7b77cbbb.77..77
        7.cbccb7ccc7ccc7777bcbb7bb..7.77
        cccc..7cc77ccb666666bbccccb..777
        7....cccbbcc.77bccc..cc77.cb..7.
        7..ccccccccccccccccccccccccccccc
        7.cc77cc.77cbcc77.bc.....cc.bb7.
        7cc7cc7777.ccbb7.7c.cc.ccc...bb.
        7c7c77.ccccccccccccccccc.....bb.
        77c....7......7c..bb7..bcc...bb.
        cc7...7.6....cc.....bb7.bbc..bb.
        ..7..7..6..cc.........bbb.bccbb.
        ..7.7..66.c..............bbbbcb.
        ..777..6cc......................
        cc.7.cc.........................
        ..ccc...........................
        `],
    150,
    false
    )
    animation.runImageAnimation(
    gel_spawn,
    [img`
        77..............................
        7.777...........................
        7....7..........................
        7.....77...........77....77.....
        7.......7cccccccccc....77.......
        7....cccc.77...7..c..77.7.......
        7..ccb......b.7...c77...7.....77
        .7c..bbbbbbb7bbbbbc.bb.7....777.
        .7cbbb7..7bb..77.cbbb777...7..7.
        .bc..b7.677.bb77cbbbcc767cc...7.
        .bc.7b666.7ccccccccccb7.6cccc.7.
        b.ccc6ccccccccccccccccccc667777.
        b..777b.77.c77cccc7b77ccc776.77.
        b.7.777b.77cbcccb7b7ccbc77.c6c7.
        .b.7777.bbbccc77b.ccccccccc..677
        7.b7..77bcccc7777cccbbcb7...7777
        777b77ccccccc7cccb777cb7b7777777
        777ccccccccccccc.7b77cbbb.77..77
        7.cbccb7ccc7ccc7777bcbb7bb..7.77
        cccc..7cc77ccb666666bbccccb..777
        7....cccbbcc.77bccc..cc77.cb..7.
        7..ccccccccccccccccccccccccccccc
        7.cc77cc.77cbcc77.bc.....cc.bb7.
        7cc7cc7777.ccbb7.7c.cc.ccc...bb.
        7c7c77.ccccccccccccccccc.....bb.
        77c....7......7c..bb7..bcc...bb.
        cc7...7.6....cc.....bb7.bbc..bb.
        ..7..7..6..cc.........bbb.bccbb.
        ..7.7..66.c..............bbbbcb.
        ..777..6cc......................
        cc.7.cc.........................
        ..ccc...........................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ..............cc................
        ...............7..c..77.........
        ............b.7...c77...7.......
        ..........bb7bbbbbc.bb.7........
        .........7bb..77.cbbb777...7....
        ......7.677.bb77cbbbcc767cc.....
        ......666.7ccccccccccb7.6cccc...
        ......ccccccccfcfffffcccc66777..
        .....7b.77.c7ffccc7bf7ccc776.7..
        .....77b.77cffccb7b7ccbc77.c6c..
        .....77.bbbcfc77b.ccccccccc..6..
        ......77bccff7777cccbbcb7...7...
        .....7cccccfc7cccb777cb7b7777...
        ....cccccccccccc.7b77cbbb.77....
        .....cb7ccc7ccc7777bcbb7bb..7...
        ......7cc77ccb666666bbccccb.....
        ......ccbbcc.77bccc..cc77.cb....
        ......ccccccccfccccccccccccc....
        .......c.77cbccff.bc.....cc.....
        .......777.ccbb7.7c.cc.ccc......
        ........cccccccccccccccc........
        ..............7c..bb7..b........
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ..............cc................
        ...............7..c..7..........
        ............b.7...c77...........
        ..........bb7bbbbbc.bb..........
        .........7bb..fcfffbb7..........
        .........77.bf7c77fbcc76........
        ..........7ccfc7c7fccb7.........
        ........cccccccc77fffcccc.......
        ........77.c7c7c7cfbf7ccc7......
        .........77ffcfcfcffccbc77......
        ........bbbfccc7ccf7fcccccc.....
        ........bccfcfc7c7c7fbcb7.......
        ........cccfcc7c77c7fcb7b777....
        ........cccfcc7c77ccfcbbb.77....
        ........cccccc7c77fccbb7bb......
        .........77cfcfcffffcbccccb.....
        .........bcc.c7c7fc..cc77.......
        ...........cccfccfcccccc........
        ............bcffc.bc............
        .............bb7.7c.............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ..............fcfff.............
        .............f7c77f.............
        ............cfc7c7ff............
        .............ccc77fbf...........
        .............c7c7cf7cc..........
        ...........ffcfcfcffccc.........
        ...........fccc7ccf7fbc.........
        ...........fcfc7c7c7fcb.........
        ...........fcc7c77c7fc..........
        ...........fcc7c77ccf...........
        ...........ccc7c77fcc...........
        ...........cfcfcffffc...........
        .............c7c7f..............
        ..............fccf..............
        ..............ffc...............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ..............fcfff.............
        .............f7c77f.............
        .............fc7c7f.............
        .............ccc77f.............
        .............c7c7cf.............
        ...........ffcfcfcff............
        ...........fccc7ccf7f...........
        ...........fcfc7c7c7f...........
        ...........fcc7c77c7f...........
        ...........fcc7c77ccf...........
        ...........ccc7c77fcc...........
        ...........cfcfcffffc...........
        .............c7c7f..............
        ..............fccf..............
        ..............ffc...............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `],
    150,
    false
    )
    otherSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    timer.after(1500, function () {
        otherSprite.setPosition(gel_spawn.x, gel_spawn.y)
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f c f f f . . . . . 
            . . . . . f 7 c 7 7 f . . . . . 
            . . . . . f c 7 c 7 f . . . . . 
            . . . . . c c c 7 7 f . . . . . 
            . . . . . c 7 c 7 c f . . . . . 
            . . . f f c f c f c f f . . . . 
            . . . f c c c 7 c c f 7 f . . . 
            . . . f c f c 7 c 7 c 7 f . . . 
            . . . f c c 7 c 7 7 c 7 f . . . 
            . . . f c c 7 c 7 7 c c f . . . 
            . . . c c c 7 c 7 7 f c c . . . 
            . . . c f c f c f f f f c . . . 
            . . . . . c 7 c 7 f . . . . . . 
            . . . . . . f c c f . . . . . . 
            . . . . . . f f c . . . . . . . 
            `)
    })
})
function settings_check () {
    if (blockSettings.exists("volume")) {
        music.setVolume(blockSettings.readNumber("volume"))
    } else {
        music.setVolume(128)
    }
    if (blockSettings.exists("message")) {
        if (blockSettings.readNumber("message") == 0) {
            game.showLongText("THIS GAME MAY CONTAIN: FLASHING LIGHTS AND DISTURBING MATERIAL! ", DialogLayout.Center)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        }
    } else {
        game.showLongText("THIS GAME MAY CONTAIN: FLASHING LIGHTS AND DISTURBING MATERIAL! ", DialogLayout.Center)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
    if (!(blockSettings.exists("save1"))) {
        blockSettings.writeNumber("save1", 0)
    }
    if (!(blockSettings.exists("save2"))) {
        blockSettings.writeNumber("save2", 0)
    }
    if (!(blockSettings.exists("save3"))) {
        blockSettings.writeNumber("save3", 0)
    }
    if (!(blockSettings.exists("hiscore"))) {
        blockSettings.writeNumber("hiscore", 0)
    }
}
function terminal_entry_get (entry: string) {
    entry = entry.toLowerCase()
if (terminal_specimens(entry)) {
        return
    }
    if (terminal_unknown(entry)) {
        return
    }
    if (terminal_monsters(entry)) {
        return
    }
    if (terminal_dolls(entry)) {
        return
    }
    game.showLongText(`ERROR

ENTRY NOT FOUND`, DialogLayout.Full)
}
function deathinsert2 () {
    death_quotes.insertAt(death_quotes.length, `And I saw, from eyes that were not mine.
And I felt, with a fear I could not reason.
They watch us, they invade us.
And keep us happy, committing treason.
To a King we didn't deserve.
To a Son who waits weeping.
That I knew, from knowledge gained while sleeping.`)
    death_quotes.insertAt(death_quotes.length, `TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD
TO TAKE THE DEAD`)
    death_quotes.insertAt(death_quotes.length, `Now you have nothing to fear.
Now you have nothing to think.
Follow your selfish desires.
Follow your natural instinct.
After all you're just an animal.
It's much easier than trying to think.`)
    death_quotes.insertAt(death_quotes.length, `With every bite with bone and skin.
The temple groaned and shook again.
His dwelling place did I neglect.
To the end with bad effect.`)
    death_quotes.insertAt(death_quotes.length, "You were sliced to death with a sickle.")
    death_quotes.insertAt(death_quotes.length, "You were drowned.")
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile52`, function (sprite, location) {
    mySprite.sayText("Saved Progress! :D", 100, false)
    if (game_save_file == 1) {
        blockSettings.writeNumber("save1", info.score())
    } else if (game_save_file == 2) {
        blockSettings.writeNumber("save2", info.score())
    } else if (game_save_file == 3) {
        blockSettings.writeNumber("save3", info.score())
    }
})
function hanged_man () {
    hanged_observed = 1111111
    hanged_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Monster_4)
    monster4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Monster_4)
    hanged_man_announcement = [
    "I MUST CONSUME",
    "DARK WORMS",
    "SCREAM INSIDE",
    "MY BRAIN",
    "TO END TURMOIL",
    "BEGGING ME",
    "TO EAT AGAIN",
    "HEARTS, AND BLOOD",
    "AND BILE, AND SOIL"
    ]
    if (hanged_chase) {
        apparition_hanged_man = textsprite.create(hanged_man_announcement._pickRandom(), 0, 2)
        apparition_hanged_man.z = 10000000
        apparition_hanged_man.setFlag(SpriteFlag.GhostThroughSprites, true)
        apparition_hanged_man.setPosition(mySprite.x, mySprite.y)
        apparition_hanged_man.follow(mySprite, 500)
        timer.after(1000, function () {
            sprites.destroy(apparition_hanged_man)
            hanged_observed = 60
            monster4.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f 5 d d d d . . . . . 
                . . . . . d d d 5 5 f . . . . . 
                . . . . . f 5 5 d d d . . . . . 
                . . . . . d d d d 5 f . . . . . 
                . . . f f d f f f f f f f . . . 
                . . . f b f b b b b f b f . . . 
                . . . f b f b b b b f b f . . . 
                . . . f b f b b b b f b f . . . 
                . . . f b f b b b b f b f . . . 
                . . . f b f b b b b f b f . . . 
                . . . 2 2 f f f f f f 2 2 . . . 
                . . . . . f b b b b f . . . . . 
                . . . . . f b b b b f . . . . . 
                . . . . . f f f f f f . . . . . 
                `)
            tiles.placeOnRandomTile(monster4, assets.tile`myTile2`)
        })
    }
}
scene.onOverlapTile(SpriteKind.Specimen_5, assets.tile`myTile`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile2`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_12, function (sprite, otherSprite) {
    if (man_cooldown) {
        if (old_man_found) {
            health_player.value += -100
        } else {
            health_player.value += -45
        }
        man_cooldown = false
        timer.after(1500, function () {
            man_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "man"
    }
})
scene.onOverlapTile(SpriteKind.Shadow_Animal, assets.tile`myTile1`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile0`)
    timer.after(5, function () {
        for (let value10 of tiles.getTilesByType(assets.tile`myTile49`)) {
            tiles.setTileAt(value10, assets.tile`myTile0`)
            tiles.setWallAt(value10, false)
        }
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Unknown_specimen_5, function (sprite, otherSprite) {
    if (lisa_cooldown) {
        health_player.value += -30
        otherSprite.unfollow()
        lisa_cooldown = false
        timer.after(1000, function () {
            lisa_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "lisa"
    }
})
function terminal_specimens (entry: string) {
    if (entry == "specimen 2" || entry == "gel") {
        game.showLongText(`Specimen 2
Known as: Gel
Species: Goop
Method: Physical Tearing

It spawns goops on the floor and right on at the door. The goop slows you down.`, DialogLayout.Full)
        return true
    } else if (entry == "specimen 3" || entry == "centipede") {
        game.showLongText(`Specimen 3
Known as: Centipede
Species: Arthropod Hybrid
Method: Infectious bites

It just chases you.`, DialogLayout.Full)
        return true
    } else if (entry == "specimen 4" || entry == "ringu") {
        game.showLongText(`Specimen 4
Known as: Ringu
Species: Spirit
Method: Consumption

Phases through walls.`, DialogLayout.Full)
        return true
    } else if (entry == "specimen 5" || entry == "bab") {
        game.showLongText(`Specimen 5
Known as: Bab
Species: Mannequin
Method: Unknown
It causes the colours to be all messed up.`, DialogLayout.Full)
        return true
    } else if (entry == "specimen 6" || entry == "the merchant" || entry == "merchant") {
        game.showLongText(`Specimen 6
Known as: The Merchant
Species: Puppet
Method: Physical Punctures
A weeping angel. Just watch your back.`, DialogLayout.Full)
        return true
    } else if (entry == "specimen 7" || entry == "the wall" || entry == "wall") {
        game.showLongText(`Specimen 7
Known as: The Wall
Species: Incorporial Entity
Method: Unknown (possibly Absorption)
It is a wall that moves up. Do not take your time.`, DialogLayout.Full)
        return true
    } else if (entry == "specimen 8" || entry == "deer lord") {
        game.showLongText(`Specimen 8
Known as: Deer Lord
Species: Forest Demigod
Method: Absorption
It moves through walls.`, DialogLayout.Full)
        return true
    } else if (entry == "specimen 9" || entry == "taker") {
        game.showLongText(`Specimen 9
Known as: Taker
Species: Clay Monster
Method: Unknown
(possibly Absorption)
Don't stay idle. At all. It will come to take the dead.`, DialogLayout.Full)
        return true
    } else if (entry == "specimen 10" || entry == "parasite") {
        game.showLongText(`Specimen 10
Known as: Parasite
Species: Parasitic Alien Life Form
Method: Parasitic Infections
Stay close to it. If you stay far from it, it becomes something that you can't outrun than you.`, DialogLayout.Full)
        return true
    } else if (entry == "specimen 11" || entry == "food demon") {
        game.showLongText(`Specimen 11
Known as: Food Demon
Species: Demon
Method: Unknown
Goes through walls, hides the doors perodically.`, DialogLayout.Full)
        return true
    } else if (entry == "specimen 12" || entry == "victorian mansion") {
        game.showLongText(`Specimen 12
Known as: Victorian Mansion
Species: Paranormal Structure
Method: Various

Its current host is an old man. The old man sprints at you periodically.`, DialogLayout.Full)
        return true
    } else if (entry == "specimen 13" || entry == "mermaid") {
        game.showLongText(`Specimen 13
Known as: Mermaid
Species: Mermaid
Method: Drowning
Stay on the boxes, and don't stay in the water for too long.`, DialogLayout.Full)
        return true
    }
    return false
}
function tick_rooms () {
    gel_room += 0 - 1
    bug_room += 0 - 1
    ringu_room += 0 - 1
    bab_room += 0 - 1
    ben_room += 0 - 1
    wall_room += 0 - 1
    deer_room += 0 - 1
    parasite_room += 0 - 1
    demon_room += 0 - 1
    man_room += 0 - 1
    siren_room += 0 - 1
    face_room += 0 - 1
    otto_room += 0 - 1
    tirsiak_room += 0 - 1
    lisa_room += 0 - 1
    guard_room += 0 - 1
    bag_room += 0 - 1
    baby_room += 0 - 1
    hanged_room += 0 - 1
    cow_room += 0 - 1
    bekka_room += 0 - 1
    husks_room += 0 - 1
    charles_room += 0 - 1
    hooked_room += 0 - 1
}
function the_two_enemies_that_has_their_own_room () {
    // I was planning to put the mansion but whatever
    if (info.score() == 610) {
        music.stopAllSounds()
        enemy_remove_cherry_picking("pentagram")
        chase_picking_yippee = "wall"
        wall_room = randint(10, 19)
    } else if (info.score() > 610) {
        if (info.score() % 610 == 0) {
            if (Math.percentChance(90)) {
                music.stopAllSounds()
                enemy_remove_cherry_picking("pentagram")
                chase_picking_yippee = "wall"
                wall_room = randint(16, 19)
            }
        }
    } else if (info.score() == 910) {
        music.stopAllSounds()
        enemy_remove_cherry_picking("pentagram")
        chase_picking_yippee = "siren"
        siren_room = randint(20, 39)
    } else if (info.score() > 910) {
        if (info.score() % 910 == 0) {
            if (Math.percentChance(90)) {
                music.stopAllSounds()
                enemy_remove_cherry_picking("pentagram")
                chase_picking_yippee = "siren"
                wall_room = randint(30, 39)
            }
        }
    } else if (info.score() == 810) {
    	
    }
}
function terminal_unknown (entry: string) {
    if (entry == "unknown specimen 1" || entry == "white face" || entry == "whiteface") {
        game.showLongText(`Unknown Specimen 1
Known as: White Face
Species: Pixelated Entity
Method: Unknown
It goes through walls and speeds up over time. It teleports near you periodically or if it hits you.`, DialogLayout.Full)
        return true
    } else if (entry == "unknown specimen 2" || entry == "otto the otter" || entry == "otto") {
        game.showLongText(`Unknown Specimen 2
Known as: Otto the Otter
Species: Animatronic
Method: Unknown
Pitiful enemy. Super slow and deals baby damage.`, DialogLayout.Full)
        return true
    } else if (entry == "unknown specimen 3" || entry == "spooper") {
        game.showLongText(`Unknown Specimen 3
Known as: Spooper
Species: Unknown
Method: Internal Bleeding
It stays at the door for 5 rooms. After that, it drains health and inhibits healing.`, DialogLayout.Full)
        return true
    } else if (entry == "unknown specimen 4" || entry == "tirsiak") {
        game.showLongText(`Unknown Specimen 4
Known as: Tirsiak
Species: Forest Spirit
Method: Clawing
It goes through walls and spawns ghost animals that block your path. Slash the animals.`, DialogLayout.Full)
        return true
    } else if (entry == "unknown specimen 5" || entry == "lisa") {
        game.showLongText(`Unknown Specimen 5
Known as: Lisa
Species: Human/Ghost
Method: Unknown
A weeping angel. Goes through walls. 
Becomes nearly invisible if watched too long.`, DialogLayout.Full)
        return true
    }
    return false
}
sprites.onOverlap(SpriteKind.Specimen_13, SpriteKind.Man_Wander, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, assets.tile`myTile45`)
})
function roll_chase () {
    if (info.score() % 2 == 0) {
        sound_change = chase_picking_yippee
        calculate_chance(info.score())
        enemy_pick()
        if (randint(0, 10000) <= x_number) {
            chase_picking_yippee = enemy_names._pickRandom()
            if (!(sound_change == chase_picking_yippee)) {
                music.stopAllSounds()
            }
            not_cherry_picking(chase_picking_yippee)
        }
    }
}
function summon () {
    cardboard()
    gel()
    bug()
    ringu()
    bab()
    ben()
    wall()
    deer()
    parasite()
    demon()
    old_man()
    siren()
    white_face()
    otto()
    spooper_()
    tirsiak()
    lisa()
    security_guard()
    body_bag()
    baby_head()
    hanged_man()
    ghost_cow()
    bekka()
    husks()
    woormy_charles()
    hooked_doll2()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_10, function (sprite, otherSprite) {
    if (parasite_cooldown) {
        health_player.value += -50
        parasite_cooldown = false
        parasite_form = -1
        specimen10.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f 3 f 5 5 5 . . . . . 
            . . . . . 3 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 f . . . . . 
            . . . . . f 4 4 2 2 b . . . . . 
            . . . . . f 4 2 2 5 3 . . . . . 
            . . . f f 5 5 5 3 3 f 5 f . . . 
            . . . 5 5 5 4 4 2 4 5 5 5 . . . 
            . . . b 4 2 2 2 5 5 5 5 f . . . 
            . . . 5 3 3 3 5 5 4 f 5 2 . . . 
            . . . 3 3 5 4 4 4 5 2 2 2 . . . 
            . . . f 4 5 5 5 5 2 2 3 3 . . . 
            . . . f 5 5 f f f 3 3 3 f . . . 
            . . . . . b 4 3 5 3 f . . . . . 
            . . . . . 5 3 3 2 5 5 . . . . . 
            . . . . . 3 2 2 5 5 f . . . . . 
            `)
        timer.after(1000, function () {
            parasite_form_until_hit = true
        })
        timer.after(3000, function () {
            parasite_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "parasite"
    }
})
function ghost_cow () {
    cow_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Monster_5)
    monster5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Monster_5)
    tiles.placeOnRandomTile(monster5, assets.tile`myTile2`)
    if (cow_chase) {
        timer.after(890, function () {
            tiles.placeOnRandomTile(monster5, assets.tile`myTile2`)
            monster5.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . c b 5 5 d c b b b c . . 
                . . c c c b 5 5 b c c c c c . . 
                . c d d d b 5 5 d c c c c . . . 
                c d d d d d d d d c c c c c c . 
                c d c d d d d b b e e c b b c . 
                . c c d d d d b e e c b b c . . 
                . . c d d d e e e e e e e e b . 
                . . c d d d e e e e e c c c 5 c 
                . . c d e e e e e e b 1 b b c c 
                . . . c e e e e e e e e e e e c 
                . . . c e e e e f f e e e e e c 
                . . . c c e e e f 2 e e e e e c 
                . . . . c c e e e e e e e e c . 
                . . . . . . c c e e e e c c . . 
                . . . . . . . . c c c c . . . . 
                `)
        })
        cow_apparition = sprites.create(img`
            ................................................................
            ................................................................
            ..................222222222222222...............................
            ...............222...............22222..........................
            ..........4.222.......................2222......................
            .......44422...........444444444444.......222...................
            .....44422........44444............444444....2..................
            .....4.2......4444.......................4444422222.............
            ....4.2...4444................................444422............
            ....42..44........................................4422..........
            ...42..............................................4.2..........
            ..42................................................44..........
            .42..................................................42.........
            .42...................................................4.........
            24....................................................42........
            4.....................................................4.2.......
            4......................................................4.2......
            4.......................................................42......
            4........................................................42.....
            4........................................................4.2....
            4........................................................4.2....
            4.........................................................42....
            4..........................................................42...
            4..........................................................42...
            4...........................................................4...
            4............................................................4..
            4............................................................4..
            4............................................................24.
            4............................................................24.
            4............................................................24.
            4............................................................24.
            4............................................................2.4
            4.............................................................24
            4.............................................................24
            4.............................................................24
            4.............................................................24
            4.............................................................24
            4.............................................................24
            4.............................................................24
            4.............................................................24
            24............................................................24
            24............................................................24
            24...........................................................2.4
            2.4..........................................................2.4
            2..4.........................................................2.4
            2...4.......................................................2..4
            2....4.....................................................2...4
            .2...4.....................................................2...4
            .2....44..................................................2...4.
            .2......4.................................................2..4..
            ..2......4................................................2..4..
            ..2......44.............................................22..4...
            ..2........4...........................................2....4...
            ...2........4.........................................2....4....
            ....2........44......................................2.....4....
            .....2.........44...................................22....4.....
            ......2..........4...............................222....44......
            ......22222.......44...........................22......4........
            ...........2222....444.......................22.......4.........
            ..............222.....4444.................22......444..........
            .................222222...444..........2222......444............
            .......................2222224444422222.....44444...............
            ..................................4444444444....................
            ................................................................
            `, SpriteKind.Food)
        cow_apparition.setFlag(SpriteFlag.GhostThroughWalls, true)
        cow_apparition.follow(mySprite, 400)
        cow_apparition.setPosition(mySprite.x, mySprite.y)
        cow_apparition.z = 2322222
        timer.after(500, function () {
            sprites.destroy(cow_apparition)
        })
    }
}
function enemy_pick () {
    enemy_names = [
    "gel",
    "bug",
    "ringu",
    "bab",
    "ben",
    "wall",
    "deer",
    "taker",
    "parasite",
    "demon",
    "man",
    "siren",
    "face",
    "otto",
    "spooper",
    "tirsiak",
    "lisa",
    "guard",
    "bag",
    "baby",
    "hanged",
    "cow",
    "bekka",
    "husks",
    "charles",
    "hooked"
    ]
    enemy_names.removeAt(enemy_names.indexOf("wall"))
    enemy_names.removeAt(enemy_names.indexOf("siren"))
    enemy_names.removeAt(enemy_names.indexOf("taker"))
}
function otto () {
    otto_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Unknown_specimen_2)
    unknownspecimen2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Unknown_specimen_2)
    tiles.placeOnRandomTile(unknownspecimen2, assets.tile`myTile2`)
    if (otto_chase) {
        timer.after(890, function () {
            tiles.placeOnRandomTile(unknownspecimen2, assets.tile`myTile2`)
            unknownspecimen2.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . . . f 1 e e 1 f . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . f f f f f f f f f f . . . 
                . . . f f f 4 4 4 4 f f f . . . 
                . . . f f f 4 4 4 4 f f f . . . 
                . . . f f f 4 4 4 4 f f f . . . 
                . . . f f f e e e e f f f . . . 
                . . . f f f e e e e f f f . . . 
                . . . . . f f f f f f e e . . . 
                . . . . . f e e e e f e e e . . 
                . . . . . f e e e e f . e e . . 
                . . . . . f f f f f f . . . . . 
                `)
            animation.runImageAnimation(
            unknownspecimen2,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . . . f 1 e e 1 f . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . f f f f f f f f f f . . . 
                . . . f f f 4 4 4 4 f f f . . . 
                . . . f f f 4 4 4 4 f f f . . . 
                . . . f f f 4 4 4 4 f f f . . . 
                . . . f f f e e e e f f f . . . 
                . . . f f f e e e e f f f . . . 
                . . . . . f f f f f f e e . . . 
                . . . . . f e e e e f e e e . . 
                . . . . . f e e e e f . e e . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . . . f 1 e e 1 f . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . f f f f f f f f f f . . . 
                . . . f f f 4 4 4 4 f f f . . . 
                . . . f f f 4 4 4 4 f f f . . . 
                . . . f f f 4 4 4 4 f f f . . . 
                . . . f f f e e e e f f f . . . 
                . . . f f f e e e e f f f . . . 
                . . . . . f f f f f f e e . . . 
                . . . . . f e e e e f e e e . . 
                . . . . . f e e e e f . e e . . 
                . . . . . f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            300,
            true
            )
        })
    }
}
scene.onOverlapTile(SpriteKind.Specimen_1, assets.tile`myTile2`, function (sprite, location) {
    sprites.destroy(sprite)
})
function bab () {
    color.setPalette(
    color.originalPalette
    )
    bab_cooldown = true
    if (bab_chase) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_5, effects.fire, 500)
    } else {
        sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_5)
    }
    specimen_5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Specimen_5)
    if (bab_chase) {
        timer.after(600, function () {
            specimen_5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f 4 f f . . . . . 
                . . . . . f 5 5 4 5 f . . . . . 
                . . . . . f 5 5 4 4 f . . . . . 
                . . . . . f 5 5 4 4 f . . . . . 
                . . . . . f 5 5 4 4 f . . . . . 
                . . . f f 5 5 f 4 4 4 f f . . . 
                . . . f 5 f 5 4 4 5 4 5 f . . . 
                . . . f 5 f 5 5 5 4 4 5 f . . . 
                . . . f 4 f 5 5 4 4 5 4 4 . . . 
                . . . 4 4 f 4 5 5 5 5 5 4 . . . 
                . . . d 5 4 4 5 5 5 f 5 4 . . . 
                . . . b d 4 f 5 5 f f 5 4 . . . 
                . . 2 b . f 4 5 4 4 f . . . . . 
                . . 2 . . f 4 5 4 5 f . . . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.Specimen_5)
            specimen_5.setFlag(SpriteFlag.GhostThroughWalls, true)
            tiles.placeOnRandomTile(specimen_5, assets.tile`myTile2`)
            timer.after(500, function () {
                scene.setBackgroundImage(img`
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661ddd6666666666666666666666666666666666666666666
                    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d111111111116666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111166666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dd1111111111111111111666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d11111111111111111111111111666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d11111111111111111111111111111116666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d111111111111111111111111111111111111111111d6666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111111111111111111111111ddd666666666666666
                    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111111111111111111111d1111111111111111dddddd66666dddd
                    66666666666666666666666666666666666666666666666666666666666666666666666666666666666111111dddd11111111111111111111111111111111111111111111dd1111111ddddddddddddd1
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666dd111111ddd111111111111111111111111111d11111111dd111dd11111111111111111111dddd111
                    666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111111111111d111d1111ddddddddd111111111ddddd111ddddddddd11111
                    66666666666666666666666666666666666666666666666666666666666666666666911111111111111d1111111111dddddd11111dddd1ddddddddddddddddddddd1111dd111111111ddddddd1111111
                    666666611111d66666666666666666666666666666666666666666666d1111111111d111d11111111111111111111111dddd1111dddddddddddddddddddddddddd111111111111dddddddddd11111111
                    66666111111111166666666666666666666666666666666dd1111dddd11111111111ddddd11111111111111111111111111111ddddddddddddddddddddddddddd111111dddddddddddddddd11111111b
                    666111111111111111666666666666666666666dd111111d11111ddddddddddddddddddddddddddddddddddddd11111111111ddddddddddddddddddddddddddddd11ddddddddddddddddd11111bbbbbb
                    1ddd1dd11111ddd1111111666666666dd11111111111111dddddddddddd11111111ddddddddddddddddddddddddddd1111111dddddddddddddddddddddddddddddddddddddddddddddd11111bbbbbbbb
                    ddddddddd11dddddd11111111111dd1111111111dddddddddddddd1111111111111111ddddddddddddddddddddddddddd111111ddddddddddddddddddddddddddddddddddddddddddbbb1bbbbbbbbbbb
                    dddddddddddddddddddddd1111111d1dddddddddddddddddd1111111111111111111111111dddddddddddddddddddddddddd11111111ddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb
                    111111ddddddddddddddddddddddddddddddddddddddb111111111111111111111111111111111dddddddddddddddddddddddddd111111dddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb
                    1111111111dddddddddddddddddddddddddddddddb111111111111111111111111111111111b1111ddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb11b
                    1111111111111dddddddddddddddddddddddddb1111111111111111111111bbb11111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb1111111
                    1111111bbb111111ddddddddddddddddddddbb1111111111111111bbbbbb111bb111111111111111111111bbbddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb1111111111111
                    bbbb111bbbbbb11111ddddddddddddddbbb11111111b111bbb11bbbbbbbbb1bbbbbbbbb1111bb1111b111111111bbddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb111111111111111
                    bbbbbbbbbbbbbbbb1111bddddddbbbbbbbb1111bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111b1111111bbbbbbbbdddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb11111111111111111
                    bbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbc1111111111111111111
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc1111111111111111111c11
                    bbbbbbbb1b11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc11111111111111111111111111
                    bbbbb11111111111b11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc11111111111c11111111111111111111
                    bbb11111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc11111111111c11111c111111cc11c11111c
                    bb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111ccccccccccc1111c111c11111111c1111cccc11cc11111c
                    bb11111111111111111111111111bb1bbbbbbbbbbbbbbbcc1111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111ccccccccccccc11111111c111c1111cccc11cc111111c
                    b11111c1111111111111111111111c1111111bbbc111111111111111111111cc111111cbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111cc1ccccccccc11111cccccc111111ccccc11ccc11111cc
                    b1111ccc1111111111111111111111cc111111ccccccccc111111111111111ccccccc11111cbbbbbbbbbbbbbbbbbbbbc111111cc11111111ccccccccccccccc1cccccccc11c111ccccc111cc11111ccc
                    1111dccc111111111111111111111111cccc11cccccccccc11111cccccccccccccccccc111111cccccbbbbbbcccccccccccccc111111ccccccccccccccccccccccccccc111111ccccccc1ccc11111ccc
                    1cccc1111111111111111111c111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111cccccccccccccccccccc
                    cccc11111111111111111111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccc
                    ccc111111111111111111111111111111c111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    11c11111c11111c1c1111cc1111111c111c11111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    1111111ccc111cc1cc111cc111111111111cc111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    111c11ccc1111cc1cc11ccccc111ccc11111cccc1111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    11cccccccc11cc11cc11cccccc111ccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccc1ccc11ccccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccc1cccc1cccccccc11ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6cccccccccccccccccccc
                    cccccccccccccccccccccccccc66cccccccccccccccc6ccccccccccccccccccccccccccccccccccccccccccc666c6cccccccccccc66666ccccccccccccccccc6ccccccc6ccc66ccccc6ccccccccccccc
                    6cc6c6666c6c6666c666cc66c666666666666666c666666cccc6666c66666666666666666666666cc6666666666666666666666666666666666666666666666666666cc666666666666666666666c666
                    666666666666666666666666e6666666666666666666ee6666666666666666666666666666666666666666eeeee6ee66666666666eeeee66666e66e66ee6666666e666e66666666eeee6666e66666666
                    6666e66e6e6ee666e66666666666666666ee6666666eee6666666eeee66eee66eee66666eee66eee666666ee66ee66eeeee76eeee6e66ee66666666eeee66e66666666e666666666eeeee6666ee66666
                    666e666666666666666e666666666666668888888888888888888888888888888888888888888888888888888888888888886ee666e66ee66666666eee666eeee6eee66666666666ee6e666ee6666666
                    6666666e66666eee66666666688888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888868888888e6666666666666e666e
                    66666666666666e66666666e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666e666666666e
                    66666666666666666ee66668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666e66666e66e
                    66666666666e6666666666e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66666e666666
                    6666e66ee666666ee6e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666e666
                    666666666666ee8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888666666e
                    66e6666666e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666
                    6e6666e668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666
                    6e666e668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866e
                    66666e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
                    6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
                    6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
                    66e6888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
                    ee66888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66
                    666e888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
                    66666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668e66ee
                    ee66888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666e66
                    e6666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666ee666
                    e666866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888886886666666666
                    666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888886667666666e666
                    6666668868886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666866e666666eee66666
                    66e666e666886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666ee666e666666666
                    66e6666666866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666666666666666666666666
                    6666666666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866eee666666e66666666666666
                    e66666e66666668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888686e666e6666e666e66666666666
                    ee66666666666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666ee666e666e66666666666
                    666666666666666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886686ee666e6666e666e6666e6e66e
                    6666666666e66666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666e666eee6666666e6e6666666
                    6666666666e6666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886e66666eee66ee6666666e6666666
                    e66e66666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666eee6666eee666666
                    e66666e6666668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66666666ee666ee6666
                    66666e666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666e666666666
                    666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66666e
                    e6e6668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
                    6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886
                    6888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    ee88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    `)
                for (let value11 of tiles.getTilesByType(assets.tile`myTile0`)) {
                    tiles.setTileAt(value11, assets.tile`transparency16`)
                }
            })
        })
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    if (book_secret) {
        mansion_navigate(8, 10, 6, 4, 12, 13)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    library_key = true
    mySprite.sayText("Library key found!", 5000, false)
    tiles.setTileAt(location, assets.tile`myTile7`)
    victorian_mansion.removeAt(6)
    victorian_mansion.insertAt(6, tilemap`level30`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Woormy_Charles, function (sprite, otherSprite) {
    if (charles_appear) {
        if (charles_cooldown) {
            health_player.value += -25
            charles_cooldown = false
            timer.after(1000, function () {
                charles_cooldown = true
            })
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
            kill_credit = "charles"
        }
    }
})
function deathinsert1 () {
    death_quotes.insertAt(death_quotes.length, `I know what you have done, and what you have yet to do.
But it's alright, because I'm inside you now.
We are one but I am many...`)
    death_quotes.insertAt(death_quotes.length, `Once
In a land of dreams
I thought I could be free
But now
The hunger never sleeps`)
    death_quotes.insertAt(death_quotes.length, "Hush now my child, you're safe now.")
    death_quotes.insertAt(death_quotes.length, `Tiny, Shining holes in the sky.
Delicate, perfect emptiness.
Black, growing absences of life.
Cold, swarming death.
And we shall become them.`)
    death_quotes.insertAt(death_quotes.length, `To become a puppet is to rid oneself of the pain and harshness of choice.
Now nothing you do is your fault,
now you belong to something...
You belong to me...`)
    death_quotes.insertAt(death_quotes.length, `YOUR ANGER HAS CONSUMED YOU
YOUR APATHY HAS CONSUMED YOU
YOUR TEMPER HAS CONSUMED YOU
YOUR HATE HAS CONSUMED YOU
YOUR DESIRE HAS CONSUMED YOU
YOUR RAGE HAS CONSUMED YOU
YOUR GUILT HAS CONSUMED YOU
YOUR SORROW HAS CONSUMED YOU
YOUR WEAKNESS HAS CONSUMED YOU
YOUR MASK HAS CONSUMED YOU
YOUR DESIRES HAS CONSUMED YOU`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    mansion_navigate(10, 11, 1, 3, 14, 8)
})
function deathinsert4 () {
    death_quotes.insertAt(death_quotes.length, `Bound by rigor mortis, sealed in plastic shroud,
A cadaver dreams beneath earth and cloud,
Sprawled on cold pavement, yearning still,
For borrowed breath, for vacant will,
Within its husk, a fantasy awakes,
For blood that sings and flesh to take,
By wearing their face, by stealing their name,
Thus living once again, through stolen frame.`)
    death_quotes.insertAt(death_quotes.length, `The cries of babies ring the brain
Makes the sane go insane
And so they were thrown and beaten
Until their cries became forsaken.`)
    death_quotes.insertAt(death_quotes.length, `Dark worms scream inside my brain.
Begging me to eat again.
Hearts, and blood, and bile, and soil.
I must consume to end turmoil.`)
    death_quotes.insertAt(death_quotes.length, `Your fear allows me to enter your mind.
Your obligation allows me to control your hands.
Your reason allows me to break your eyes.
Your guilt allows me to loosen your neck.
Your expectation allows me to hide the truth.
Your tendencies have allowed me to make you`)
    death_quotes.insertAt(death_quotes.length, "Don't get up before Saturday.")
    death_quotes.insertAt(death_quotes.length, `Scarlet burning holes are placed into the skin
and flesh rebound into an unfamiliar form.
Molded into something new, the husk reshaped
into a skin more accepting of the howling void.`)
}
function flashlightSpawn () {
    multilights.toggleLighting(true)
    multilights.addLightSource(
    mySprite,
    5,
    5,
    0
    )
    multilights.addFlashLightSource(
    mySprite,
    0,
    165,
    150,
    0,
    0
    )
}
function ringu () {
    ringu_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_4)
    if (ringu_chase) {
        timer.after(600, function () {
            specimen_4 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f 1 f f f f . . . . 
                . . . . . f 1 1 1 d f f f . . . 
                . . . . . f 1 1 d 1 f f f . . . 
                . . . . . 1 1 d d d 1 f f f . . 
                . . . . . f 1 d d d f . f f . . 
                . . . f f f f 1 f f f f f . . . 
                . . . 1 1 1 1 1 1 1 f 1 f . . . 
                . . . f 1 1 1 1 1 1 1 1 f . . . 
                . . . f 1 f 1 1 1 1 1 1 f . . . 
                . . . f 1 1 1 1 1 1 f 1 f . . . 
                . . . 2 1 d d d d d f 1 2 . . . 
                . . . 2 2 f 1 1 1 1 1 2 2 . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . . . . 1 1 1 . . . . . . 
                . . . . . . . . 1 . . . . . . . 
                `, SpriteKind.Specimen_4)
            specimen_4.setFlag(SpriteFlag.GhostThroughWalls, true)
            specimen_4.follow(mySprite, 90)
            tiles.placeOnRandomTile(specimen_4, assets.tile`myTile2`)
        })
    }
}
function demon () {
    if (demon_chase) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_11)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        tiles.placeOnRandomTile(door_invisible, assets.tile`myTile1`)
        timer.after(1000, function () {
            demon_cooldown = true
            specimen11 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . 5 . . . . . . . . . . 5 . . 
                . . . 5 5 . 5 4 2 2 . 5 5 . . . 
                . . . . . 5 2 2 2 2 a . . . . . 
                . . . . . 2 f 2 2 f 2 . . . . . 
                . . . . . 2 2 2 2 2 2 . . . 5 5 
                . . . 2 a a 2 2 2 2 a a 2 . . 2 
                . . . 2 2 a a a a a a 2 2 . . 2 
                . . . 2 . 2 2 2 2 2 2 . 2 2 2 2 
                . . 5 2 . 2 2 2 2 2 2 . . . 5 . 
                . . 2 2 . 2 2 2 2 2 2 . . . . . 
                . . 2 2 . . 2 2 2 2 2 . . . . . 
                . 2 5 . . . 2 2 2 . 2 2 . . . . 
                . 5 . . . 2 2 . . . . 2 5 . . . 
                . . . . 5 2 . . . . . . . . . . 
                . . . . 5 . . . . . . . . . . . 
                `, SpriteKind.Specimen_11)
            specimen11.setFlag(SpriteFlag.GhostThroughWalls, true)
            tiles.placeOnRandomTile(specimen11, assets.tile`myTile2`)
            specimen11.follow(mySprite, 100)
            demon_lines = [
            "I will catch you",
            "Stop running away",
            "I see you",
            "Turn to me"
            ]
            specimen11.sayText(demon_lines._pickRandom(), 750, false)
            tiles.placeOnRandomTile(specimen11, assets.tile`myTile2`)
        })
    }
}
sprites.onOverlap(SpriteKind.Axe, SpriteKind.Monster_3, function (sprite, otherSprite) {
    spriteutils.placeAngleFrom(
    otherSprite,
    randint(0, 360),
    randint(170, 200),
    mySprite
    )
})
function init_rooms () {
    gel_room = -10
    bug_room = -10
    ringu_room = -10
    bab_room = -10
    ben_room = -10
    wall_room = -10
    deer_room = -10
    parasite_room = -10
    demon_room = -10
    man_room = -10
    siren_room = -10
    face_room = -10
    otto_room = -10
    tirsiak_room = -10
    lisa_room = -10
    guard_room = -10
    bag_room = -10
    baby_room = -10
    hanged_room = -10
    cow_room = -10
    bekka_room = -10
    husks_room = -10
    charles_room = -10
    hooked_room = -10
    chase_picking_yippee = "horror"
}
function baby_head () {
    head_cooldown = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Monster_3)
    if (head_chase) {
        monster3 = sprites.create(img`
            ................................................................
            ................................................................
            ................................................................
            .....fffffffffffff..............................................
            .....ff...........ffffffffffffffffffffffffff....................
            .....f.f....................................fffffffffffff.......
            .....f..f..............................................ff.......
            .....f...f............................................f.f.......
            .....f....ff........................................ff..f.......
            .....f......f......................................f....f.......
            .....f.......f.....eeeeeeeeeeeee..................f.....f.......
            .....f........f..eeeeeeeeeeebeeeeee.............ff......f.......
            .....f.........feeeeeeeeeeeebbeeeeeee..........f........f.......
            .....f.........eeeeeeeeeeeeeebeeeeeeee........f.........f.......
            .....f........eeeeeebbeeeeeeeeeeeeeeeeee.....f..........f.......
            .....f........ebbbbbeeeeeeeeeeeebbbeeeeee..ff...........f.......
            .....f.......eebeeeeeeeeffeeeeeeeeebeeeee.f.............f.......
            .....f.......eeeeeeeeeeeefeeeeeeeeeebeeeef..............f.......
            .....f......eeeeeeeeeeeeeffeeeeeeeeeebeeee..............f.......
            .....f......eeeeeeeeeeeeeffeeeeeeeeeebbeee..............f.......
            .....f......eeeeeeeeeeeeeffeeeeeeffeeebeee..............f.......
            ....f.......eeeeefffffeeeffeeeeffafeeeeeeee.............f.......
            ....f.......eeeeefaaaffeeffeeeffaafeeeeeeee............f........
            ....f......eeeeeefaaaafeeffeefaaaafeeeeeeeee...........f........
            ....f......eeeeeefaaaafeeffeefaaaafeeeeeeeee...........f........
            ....f......eeeeeefffaffeeffeeffffffeeeeeeeee...........f........
            ....f......eeeeeeeefffeefffeeeeeeeeeeeeeeeeee..........f........
            ....f......eeeeeeeeeeeeeffffeeeeeeeeeeeeeeeee..........f........
            ....f......eeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeee.........f........
            ....f......eeeeeeeeeeeefffffeeeeeeeeeeeeeeeeee.........f........
            ....f......eeeeebeeeeeefffffeeeeeeeeeeeeeeeeee.........f........
            ....f......eeeeebeeeeeefffffeeeeeeebeeeeeeeeee.........f........
            ....f.......eeeebeeeeeffffffeeeeeeebeeeeeeeeeee........f........
            ....f.......eeeebebeeefffffffeeeeeebeeeeeeeeeee........f........
            ....f.......eeeebebbeeeefffffeeeeeebeeeeeeeeeee........f........
            ....f.......eeeebeebeeeeefffffeeeeebeeeeeeeeeee........f........
            ....f.......eeeeebeebeeeeeffffeeeeebeeeeeeeeeee........f........
            ....f........eeeebeebeeeeefffffeeeebeeeeeeeeeee........f........
            ...f.........eeeeebeebbeeeeffffeeeebeeeeeeeeeee........f........
            ...f.........eeeeeeeeebbeeefffffeeebeeeeeeeeeee........f........
            ...f..........eeeeeeeeeeeeeeffffeeebeeeeeeeeee........f.........
            ...f..........eeeeeeeeeeeeeeffffeeeeeeeeeeeeee........f.........
            ...f...........eeeeeeeeeeeeeffffeeeeeeeeeeeee.........f.........
            ...f...........eeeeeeeeeeeeeeeeeeeeeeeeeeeee..........f.........
            ...f............eeeeeeeeeeeeeeeeeeeeeeeeeee...........f.........
            ...f...........feeeeeeeeeeeeeeeeeeeeeeee..f...........f.........
            ...f..........f..eeeeeeeeeeeeeeeeeeeee.....f..........f.........
            ...f........ff....eeeeeeeeeeeeeeeee.........f.........f.........
            ...f.......f.........eeeeeeeeeeee............f........f.........
            ...f......f...................................f.......f.........
            ...f.....f.....................................f......f.........
            ...f....f.......................................f.....f.........
            ...f..ff.........................................f....f.........
            ...f.f............................................f...f.........
            ...ff..............................................f..f.........
            ...fffffffffffff....................................f.f.........
            ................fffffffffffffffffffffffff............ff.........
            .........................................fffffffffffff..........
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            `, SpriteKind.Monster_3)
        monster3.setFlag(SpriteFlag.GhostThroughWalls, true)
        monster3.follow(mySprite, 52)
        spriteutils.placeAngleFrom(
        monster3,
        randint(0, 360),
        randint(170, 200),
        mySprite
        )
    }
}
function song_pull (chase_current: string) {
    if (game_active) {
        console.log(chase_current)
        if (chase_current == "gel") {
            music.play(music.createSong(hex`0096000408010200001c00010a006400f4016400000400000000000000000000000000050000041e0000000400011908000c0001190c001000012510001400011918001c00011909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8002a0000000100010a08000900010a10001100010a12001300010a14001500010a16001700010a18001900010a`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "bug") {
            music.play(music.createSong(hex`0078000408040206001c00010a006400f401640000040000000000000000000000000000000002180000002000011d20004000011d40006000011e60008000011e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003000000001000112100011000113200021000112300031000113400041000112500051000113600061000112700071000113`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "ringu") {
            music.play(music.createSong(hex`0055000408020200001c00010a006400f4016400000400000000000000000000000000050000043c0000000400010d08000c00010d10001400010d14001800010f18001c00011120002400011124002800010f28002c0001112c003000011230003400011406001c00010a006400f4016400000400000000000000000000000000000000023c0000000400011908000c00011910001400011914001800011b18001c00011d20002400011d24002800011b28002c00011d2c003000011e300034000120`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "bab") {
            music.play(music.createSong(hex`00be000408020205001c000f0a006400f4010a00000400000000000000000000000000000000020c0000002000012220004000012209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80031001000110001151400150001151800190001151c001d0001153000310001153400350001153800390001153c003d00021315`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "ben") {
            music.play(music.createSong(hex`005a000408020300001c00010a006400f401640000040000000000000000000000000005000004300000000800011808001000019a10001800011b18002000011620002800011d28003000011b30003800011b38004000011b05001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800011808001000019a10001800011b18002000011620002800011d28003000011b30003800011b38004000011b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8002400000001000104100011000108240025000107300031000105340035000109380039000105`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "wall") {
            music.play(music.createSong(hex`0078000408020200001c00010a006400f401640000040000000000000000000000000005000004360020002200011922002400011d24002800012728002a0001192a002c00011d2c003000012930003200011932003400011d34003800012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80050000000010002150004000500011508000900020007100011000215001400150001151800190002000720002100021500240025000115280029000200073000310002150034003500011538003900020007`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "deer") {
            music.play(music.createSong(hex`00c8000408020200001c00010a006400f401640000040000000000000000000000000005000004600000000400012704000800012408000c00019f0c001000012410001400011b14001800012418001c00019f1c002000012420002400012724002800012428002c00019f2c003000012430003400011b34003800012438003c00019f3c004000012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80024000000010001020800090001060c000d0001162000210001053400350001073c003d000112`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "parasite") {
            music.play(music.createSong(hex`0032000408010200001c00010a006400f40164000004000000000000000000000000000500000430000000040001200400080001a108000c0001220c00100001a31000140001201400180001a118001c0001221c00200001a303001c0001dc00690000045e01000400000000000000000000056400010400030600000020000111`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "demon") {
            music.play(music.createSong(hex`0078000408010305001c000f0a006400f4010a0000040000000000000000000000000000000002180000000400012508000c0001a61000140001a318001c0001a806001c00010a006400f40164000004000000000000000000000000000000000218000000080001250800100001a61000180001a31800200001a809010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80030000000010001000400050001010800090001000c000d0001001000110001011400150001001800190001001c001d000101`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "man") {
            music.play(music.createSong(hex`00be000408020200001c00010a006400f4016400000400000000000000000000000000050000042a0000001000011910001400011914001800011918002800011928002c0001192c003000011930004000011909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80060000000010001000400050001020800090001000c000d0001001000110001021400150001001800190001001c001d0001022000210001002400250001022800290001002c002d0001003000310001023400350001023800390001003c003d000102`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "siren") {
            music.play(music.createSong(hex`0078000408040200001c00010a006400f4016400000400000000000000000000000000050000040c0010004000012750008000012203001c0001dc00690000045e01000400000000000000000000056400010400030c00000040000119400080000116`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "face") {
            music.play(music.createSoundEffect(WaveShape.Square, 252, 252, 50, 50, 5000, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        } else if (chase_current == "otto") {
            music.play(music.createSong(hex`0078000408020300001c00010a006400f401640000040000000000000000000000000005000004540000000400012204000600011d06000800011d08000c0001250c000e00011d1400160001a118001a00012220002400012424002600011e26002800011e28002c0001272c002e00011e3400360001a338003a00012405001c000f0a006400f4010a00000400000000000000000000000000000000023c0000000400012204000800012208001000012210001800012218002000012220002400012424002800012428003000012430003800012438004000012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001800000001000108100011000107200021000108300031000107`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "spooper") {
            music.play(music.createSong(hex`0078000408040203001c0001dc00690000045e010004000000000000000000000564000104000330000000100001181000200001182000300001183000400001184000500001a55000600001a56000700001a57000800001a509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001800000001000111200021000111400041000111600061000111`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "tirsiak") {
            music.play(music.createSong(hex`0078000408010205001c000f0a006400f4010a0000040000000000000000000000000000000002300000000400011804000800011808000c0001180c001000011810001400011814001800011818001c0001181c002000011809010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80036000000010001000400050001000800090001120c000d0001001000110001001400150001121800190001001a001b0001001c001d000112`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "lisa") {
            music.play(music.createSoundEffect(WaveShape.Noise, 500, 252, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        } else if (chase_current == "guard") {
            music.play(music.createSong(hex`0078000408020106001c00010a006400f4016400000400000000000000000000000000000000020c00000020000112200040000112`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "bag") {
            music.play(music.createSong(hex`00be000408020204001c00100500640000041e000004000000000000000000000000000a0400040c0000002000011820004000011809010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003c000000010001140400050001140800090001141000110001141c001d0001142800290001142c002d0001143000310001143800390001143c003d000114`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "baby") {
            music.play(music.createSoundEffect(WaveShape.Noise, 252, 252, 100, 100, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        } else if (chase_current == "hanged") {
            music.play(music.createSong(hex`0078000408020304001c00100500640000041e000004000000000000000000000000000a0400040c0000002000011820004000011805001c000f0a006400f4010a00000400000000000000000000000000000000020c0000002000010c20004000010c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8006600000001000214080400050001080800090001080c000d00021408100011000108140015000108180019000214081c001d000108200021000108240025000214082800290001082c002d000108300031000214083400350001083800390001083c003d00021408`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "cow") {
            music.play(music.createSong(hex`0078000408020303001c0001dc00690000045e01000400000000000000000000056400010400031e0000000800011608002000012220002800011628003c0001223c004000012704001c00100500640000041e000004000000000000000000000000000a0400041e0000000800011608002000012220002800011628003c0001223c004000012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80013000000010001112400250002050a300031000115`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "bekka") {
            music.play(music.createSong(hex`0078000408020200001c00010a006400f401640000040000000000000000000000000005000004600000000400011b04000800011b08000c00011b0c001000011b10001400011b14001800011b18001c00011b1c002000011b20002400019a24002800019a28002c00019a2c003000019a30003400019a34003800019a38003c00019a3c004000019a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001800000001000115100011000115200021000115300031000115`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "husks") {
            music.play(music.createSoundEffect(WaveShape.Noise, 574, 574, 100, 100, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        } else if (chase_current == "charles") {
            music.play(music.createSong(hex`0078000408020109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001c0000000100021307100011000213072000210002130730003100021307`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "hooked") {
            music.play(music.createSong(hex`0078000408020103001c0001dc00690000045e01000400000000000000000000056400010400032400000010000118100014000111140020000114200030000118300034000111340040000114`), music.PlaybackMode.UntilDone)
        } else if (chase_current == "horror") {
            // Generated from debussy-clair-de-lune.mid
            // Melodic tracks transposed -1 octave(s)
            // Drum tracks transposed -2 octave(s)
            clair_de_lune = music.createSong(hex`0030000910240100001c00010a006400f401640000040000000000000000000000000005000004f81908001000021ea108004800021ea110003000012a1000300001ad30004e0002a62a48009000029f22500058000225a85800600002a62a600095000225a89000d800021ea19800a00002a3a6a000a8000225a8a800b40001a6a800e10001a3b400cc00012acc00e00001a6d8002001029c9fe000e80002a125e800f00002a3a6f00025010125f0001d0101a120015001039f9c9a2801300101a33001380101253801400101a34001480101a84801500101a35001580101a150016801019f50016801029c195801600101a36001700101a168019801039c9a9770017801019f7801800101a180019801019f9801b601011e9801ae01019c9801b001021916b001f401019ab001f8010197b001e0010195b801c001011ec001c801019fc801d001011ed001d80101a3d801e001011ee001e801019ce001f8010193e801f001011ef001ff01019cf80128020197f801280202951200020802019a08021002019c10022802019a280240020219952802400201932802340201903402480201894002480201824802500202129550028502021ea158027002012a5802700201ad70028e0202a62a8802b80202878e9002980201a89002cc02029fa39002d002048e93979a9802a002012aa002d50201a8d002000302068ed802e002029aa6d802e80203a11295e002e802029ca8e802000303a1ad1ee802000302a69a00031603041ea6959a00031e03012a1803480302878e2003280301a820035c03029fa320036003048e93979a28033003012a3003480301a84803660301a66003a803018968037003029aa66803780303a1121870037803029ca87803840302a3af7803a803012a7803980303189a1e84039c0302a1ad9c03a803011e9c03b003012aa803d803018bb003b80301a8b003ec03021ea3b003cc03019cb003f003021297b803c003012ac003cc0301a8cc03e40301a6cc03f003019ae403ef0301a3f0032004023884fc031004032a361efc03100403af9fa31004180406a8afb49c9fa31804200406a8afb49c9fa32004280406a8afb49c9fa32804300406a6afb29a9fa33004380406a6afb29a9fa33804400406a6afb29a9fa3400448040725abaf31199fa3480450040725abaf31199fa350045c040725abaf31199fa35c04680406a6afb29a9fa368047e0406a3abaf979a9f8004b004038b38848c04a004032a361e8c04a00403af9fa3a004a80406abafb79fa3a8a804b004062aaf361e9fa3b004b80406a8afb49c9fa3b804c004062aaf361e9fa3c004c80406a8afb49c9fa3c804d00406a6afb29a9fa3d004d80406a8afb49c9fa3d804e00406a6afb29a9fa3e004ea040325af31e004ec0403199fa3ea04ec0401b4ec04f70403a6afb2ec04f804039a9fa3f804160503a3abaff8040e0503979c9f10054005023d8918052005039fab932005280504a1a8ad952005300502199c28053005032531193005380504a3abaf9730053f05029c9f38053f05039fab9340057005023e0a48055005079f25a8ab93199c50055805079f25a8ab93199c58056005079f25a8ab93199c60056805079f25a8ab93199c6805700507a125a8ad95199c70058605079f25a8ab93199c8805b805023f8b90059805039fab939005a80501a69005a00502979a9805a00503a1ad95a005a80503a6b29aa805b00503a3af97a805b70503ab9a9fb005b705039fab93b805e80502010dc005c805079fa3a8ab93979cc805d005079fa3a8ab93979cd005d805079fa3a8ab93979cd805e005079fa3a8ab93979ce005e80507a1252aad95191ee805fe05079fa3a8ab93979c0006300602828e08061006039fab930806200602a3a60806180602979a1006180603a1ad951806200603a8b49c2006280603a6b29a20062f0604abaf9fa328062f0603a3af97300660060284903806400606a3abaf979a9f4006480606a3abaf979a9f4806500606a3abaf979a9f5006580606a3abaf979a9f580660060625ad31199ca16006680606a3abaf979a9f6806700606a6afb29a9fa37006770606a8afb49c9fa37806a80601ad7806a806011e7906a80602b2a17b06a80602b9a67d06a806012aa806c00601ada806c006011da906c00602b2a1ab06c00601b9ab06c00601a3ad06c00601a6af06c0060129c006f00601adc006ed06019cc106f00601b2c106ed06019fc306f00601b9c306ed0601a1c506ed0601a6c706ed0601a8f006080702a195f106080702a89cf206080702ad9ff3060807012508073707021ea108071e0701820c071007018910071407018e14071807011218071c0701951c071f07019a20073607010624072807010d28072c0701122c073007019530073407011934073807011e3807480702a12438074e0701893c074007011140074407019544074807011848074f0701a648074c07011d4c074f0701a150077f07021ea150076607018254075807018958075c07018e5c076007011260076407019564076707019a68077e0701066c077007010d70077407011274077807019578077c0701197c078007011e8007900702a12480079607018984078807011188078c0701958c07900701189007940701a19007970701a194079707011d9807a807021ea698079c0701829c07a0070189a007a407018ea407a8070112a807b00702a1a8a807ac070195ac07b007019ab007c80701a6b007c807012ab007b407011eb407b80701a1b807bc07011ebc07c007019ac007c4070195c407c8070112c807d807021ea6c807cc070195cc07d0070112d007d407018ed407d8070189d807df0702a62ad807dc07018edc07df070189e007e80702a82ce007e4070184e407e807018be807f00702a62ae807ec070190ec07f0070114f007f80702a3a6f007f4070197f407f807019cf8070d0802a3a6f807fc070120f807ff070120fc070008019c00080808011e00080408019704080808011408081008019a08080c0801900c081008018b10081c08019a10081408018414081808018b18081c0801901c08270801971c082008011420082408019024082708018b2808580801a328083e0801892c083008019030083408019334083808019738083c0801193c083f08019f40085608018744084808018e48084c0801934c085008019750085408019a54085708019f58086808012558086e0801065c086008010d60086408011264086808019568086f08012a68086b0802a1196c087008011e7008a00801a370088608018974087808019078087c0801937c088008019780088408011984088708019f88089e0801878c089008018e90089408019394089808019798089c08019a9c089f08019fa008b0080125a008b6080106a408a808010da808ac080112ac08b0080195b008b708012ab008b30802a119b408b808011eb808d00801abb808ce080184bc08c008018bc008c4080190c408c8080193c808cc080197cc08cf08019cd008d708019fd408dc08019fd808dc0801a3dc08e808022a1ee008e408019fe408e80801a3e808f40802271bec08f008019ff008f40801a3f408ff0802a89cf808fb08019ffc08000901a30009170901af00091609011b04090809019f08090c0901a30c09100901a31009140901ab14092f0901af18092e09019c1c092009019f2009240901a32409280901a328092c0901ab2c09300901af3009460902ad9530093409011934093809011d38093c0901a13c09400901254009440901294409470901ad48097709022aad48095e09018e4c095009019550095409019a54095809011e58095c0901a15c095f0901a660096409019560097609011264096809011968096c09011e6c09700901a170097409012574097809012a7809880902ad3078097c09011878098e0901957c098009011d8009840901a184098809012488098f0901b288098c0901298c098f0901ad9009bf09022aad9009a609018e94099809019598099c09019a9c09a009011ea009a40901a1a409a70901a6a809ac090195a809be090112ac09b0090119b009b409011eb409b80901a1b809bc090125bc09c009012ac009d00902ad30c009c4090118c009d6090195c409c809011dc809cc0901a1cc09d0090124d009d40901add009d70901add409d7090129d809e80901b2d809dc09019ad809ee090118dc09e009011de009e40901a1e409e80901a6e409ef090124e809ef0901adec09f0090129f009000a0135f009f409011df009060a019af409f80901a1f809fc090124fc09000a0129fc09070a01a6000a070a01b2040a080a01ad080a180a01b9080a0c0a01a1080a1e0a011d0c0a100a0124100a140a01a6140a180a01ad140a1f0a0129180a1f0a01351c0a200a0130200a380a01b9200a360a01a1240a280a0122280a2c0a01a62c0a300a01ad300a340a01b2340a370a012e380a650a01b7380a4e0a019f3c0a400a0122400a440a01a6440a480a01ab480a4c0a01b24c0a4f0a012e500a540a019f500a660a011e540a580a0122580a5c0a01a65c0a600a01ab600a640a01b2640a670a012e680a980a01b7680a6c0a019f680a7e0a011d6c0a700a0122700a740a01a6740a780a01ab780a7c0a01b27c0a7f0a012e800a840a019f800a960a019c840a880a0122880a8c0a01a68c0a900a01ab900a940a01b2940a970a012e980aa80a013a980a9c0a011d980aae0a019a9c0aa00a0122a00aa40a01a6a40aa80a0129a80aac0a01bea80aaf0a01beac0aaf0a01b2b00ae00a01abb00ac80a0118b40ab80a019cb80abc0a019fbc0ac00a019fc00ac40a01a6c40ac80a0122c80ae00a0116cc0ad00a019ad00ad40a011dd40ad80a019fd80adc0a01a6dc0ae00a0122e00af00a012ee00af80a0195e40ae80a019ae80aec0a011dec0af00a0122f00af70a01b2f00af40a0129f40af80a012ef80a000b02b235f80a400b0193fc0a000b019a000b080b0230b4000b040b011d040b080b019f080b100b022eb2080b0c0b01220c0b100b01a6100b1c0b02ad30100b140b0129140b180b01ab180b1c0b01291c0b300b02ab2e1c0b200b01a6200b240b0122240b270b019f280b2c0b011d2c0b300b019f300b380b0229ad300b340b011d340b380b019a380b400b02a8ab380b3c0b01163c0b400b0193400b480b02a629400b440b0187440b480b018e480b500b0224a8480b4c0b01114c0b500b0193500b580b0222a6500b540b0116540b580b019a580b600b02a124580b5c0b011d5c0b600b019a600b680b029f22600b640b0116640b680b0193680b780b021da1680b6c0b01116c0b6f0b018e700b880b0116700b740b0187740b780b018e780b800b029c9f780b7c0b01877c0b800b018e800b880b029a1d800b840b0187840b870b018e880bb80b029a9c880b980b0193880b8c0b01898c0b900b0190900b940b0189940b980b0190980ba00b0195980b9c0b01899c0ba00b0190a00bb00b0197a00ba40b0189a40ba80b0190a80bac0b0189ac0bb00b0190b00bb90b019ab00bb40b0189b40bb80b0190b80bc70b029c9fb80bcd0b0119b80bbc0b0189bc0bc00b0190c00bc40b0189c40bc80b0190c80bcf0b039c9fa3c80bcc0b0189cc0bd00b0190d00b000c029a9cd00be00b0193d00bd40b0189d40bd80b0190d80bdc0b0189dc0be00b0190e00be80b0195e00be40b0189e40be80b0190e80bf80b0197e80bec0b0189ec0bf00b0190f00bf40b0189f40bf80b0190f80b010c019af80bfc0b0189fc0b000c0190000c0f0c029c9f000c150c0119000c040c0189040c080c0190080c0c0c01890c0c100c0190100c170c019c100c1f0c029fa3100c140c0189140c170c0190180c200c019a180c1c0c01891c0c200c0184200c280c03a1252a200c240c0189240c280c0190280c300c039fa3a8280c2c0c01892c0c300c0190300c480c019f300c480c01a3300c380c019a300c340c0195340c380c0190380c400c0197380c3c0c01953c0c400c019c400c480c019a400c440c0195440c480c0190480c5e0c029fa1480c4f0c0197480c4c0c01954c0c500c0190500c580c0119500c540c0189540c580c0190580c600c019c580c5c0c01895c0c5f0c0184600c680c039a9fa3600c640c0189640c680c0184680c700c03a1252a680c6c0c01896c0c700c0190700c780c039fa3a8700c740c0189740c780c0190780c900c019f780c900c01a3780c800c019a780c7c0c01957c0c800c0190800c880c0197800c840c0195840c880c019c880c900c019a880c8c0c01958c0c900c0190900ca60c029fa1900c970c0197900c940c0195940c980c0190980ca00c0119980c9c0c01959c0ca00c0190a00ca80c019ca00ca40c0195a40ca70c0190a80cd80c01a8a80cd80c019aa80cb80c0193ac0cb00c019cb00cb40c019fb40cb80c01a3b80cbc0c019fb80cc00c0195bc0cbf0c019cc00cd00c0197c40cc80c019cc80ccc0c019fcc0cd00c01a3d00cd40c019fd00cd80c019ad40cd70c019cd80ce80c01abd80ced0c0119dc0ce00c019ce00ce40c019fe40ce80c01a3e80cef0c01afe80cec0c0125ec0cef0c01a8f00c200d01a8f00c200d019af00c000d0193f40cf80c019cf80cfc0c019ffc0c000d01a3000d040d019f000d080d0195040d070d019c080d180d01970c0d100d019c100d140d019f140d180d01a3180d1c0d019f180d200d019a1c0d1f0d019c200d300d01ab200d350d0119240d280d019c280d2c0d019f2c0d300d01a3300d370d01af300d340d0125340d370d01a8380d990d01b4380d540d019f3c0d400d01a3400d440d01a6440d480d01a8480d4c0d01ab4c0d4f0d01af500d690d019f540d580d01a3580d5c0d01a65c0d600d01a8600d630d01ab640d680d0131680d7e0d019f6c0d700d01a3700d740d01a6740d780d01a8780d7c0d01ab7c0d7f0d01af800d9c0d019f840d880d0122880d8c0d01a68c0d900d01a8900d940d01ab940d970d012e980db00d01b2980dad0d019f9c0da00d0122a00da40d01a6a40da80d01a8a80dac0d01abac0daf0d0130b00dc60d02b49fb40db80d0122b80dbc0d01a6bc0dc00d01a8c00dc40d01abc40dc70d012ec80df50d011ecc0dd00d01a1d00dd40d0125d40dd80d012ad80ddc0d01addc0ddf0d0131e00df80d0136e00df80d01b9f80d180e0136f80d100e011e100e3d0e011e140e180e0122180e200e0231b4180e1c0e01251c0e200e01a8200e280e02b236200e240e012a240e270e012e280e5d0e0231b4400e580e011e580e850e011e5c0e600e01a1600e680e02afb2600e640e01a3640e680e01a6680e700e0231b4680e6c0e012a6c0e6f0e01ad700e7c0e02afb27c0e940e01b27c0e940e0136880ea00e011e940ea80e02afb2a00ecd0e019ca40ea80e019fa80eb00e02ad31a80eac0e01a1ac0eb00e0125b00eb80e02afb2b00eb40e01a8b40eb70e01abb80ee50e02ad31d00ee80e019ce80e160f019aec0ef00e019cf00ef80e02afabf00ef40e019ff40ef80e01a3f80e000f0231adf80efc0e01a6fc0eff0e01a8000f080f01af000f180f01ab080f100f01b4100f180f01af180f200f01ad180f360f012a180f2e0f029c19190f2e0f011e1b0f2e0f01a11c0f2f0f0125200f280f01af280f370f01ad300f5e0f010d340f380f0193380f400f02aba8380f3c0f01973c0f400f0119400f480f02ad2a400f440f019c440f470f019f480f600f03aba8a3600f7e0f012a600f760f0422199c12780fa60f01957c0f800f0197800f880f022aa6800f840f019a840f880f011e880f900f02aba8880f8c0f01a18c0f8f0f01a3900f980f012a900fa80f01a6980fa00f01afa00fa80f012aa80fb00f01a8a80fbe0f02a693a90fbe0f0197ab0fbe0f019aac0fbf0f019cb00fb80f012ab80fc70f01a8c00fed0f0112c40fc80f0195c80fd00f02a3a6c80fcc0f0197cc0fd00f019ad00fd80f0225a8d00fd40f011ed40fd70f01a1d80ff00f02a3a6f00f061002a125f00f0810029319f00ffc0f0190fc0f08100189081010100282891010181002129518104d10021ea120103810012a2010381001ad20104d1001183810581002a62a5010801002878e5810601001a858109410029fa358109810048e93979a60106810012a68109d1001a89810c8100189a010a810029aa6a010b01003a11295a810b010029ca8b010c81002a1adb010c810032a9a1eb010e0100118c810e010021ea6c810e810012ac810e010019ae0101011018be810f01001a8e8102411021ea3e8101011019ce8102811021297f010f810012af810101101a81011261101a610112811019a28117011010630113811019a30114011019538114011019c40115811029a1e4011581101a358116d1103959a1e7011a011018478118011019f7811881102979a8011881101a188119f1102a6a388119e11019f8811a0110190a011b61104a39a9f9cb811e8110189c011c81101a3c011d01102199fc411d0110190c811d0110125d011e811032aa125d011e81101ade811fe1103a1199fe8110012019500121612018204120812018908120c12018e0c121012011210121312019514121812019a18122e1201061c122012010d20122412011224122812019528122c1201192c122f12011e30124612018234123812018938123c12018e3c124012011240124412019544124712019a48125e1201064c125012010d50125412011254125812019558125c1201195c125f12011e601278120224a160128d12018964126812011168126c1201956c127012011870127412011d74127812019f78128e1203a61da19012a612018e94129812019598129c12019a9c12a012011ea012a41201a1a412a71201a6a812be120112ac12b0120119b012b412011eb412b81201a1b812bc120125bc12bf12012ac012d612018ec412c8120195c812cc12019acc12d012011ed012d41201a1d412d71201a6d812ee120112dc12e0120119e012e412011ee412e81201a1e812ec120125ec12ef12012af01208130130f0121d1302ad95f412f8120118f812fc12011dfc12001301a100130413012404131e13012908131e1301b22013381301302013501301ad20134d13019524132813011828132c13011d2c13301301a130133413012434134e1301293813501301b25013661301355013681301896813b0130236b96813981301826c137013018970137413018e74137813011278137c1301957c138013019a80138813011e8813901301a19013981301a69813a013012aa013a81301ada813af1301b2b013e01302ad9ab113e01302b2a1b213e0130236a6b313e01302b92a`)
            music.play(clair_de_lune, music.PlaybackMode.UntilDone)
        } else {
            // Generated from debussy-clair-de-lune.mid
            // Melodic tracks transposed -1 octave(s)
            // Drum tracks transposed -2 octave(s)
            clair_de_lune = music.createSong(hex`0030000910240100001c00010a006400f401640000040000000000000000000000000005000004f81908001000021ea108004800021ea110003000012a1000300001ad30004e0002a62a48009000029f22500058000225a85800600002a62a600095000225a89000d800021ea19800a00002a3a6a000a8000225a8a800b40001a6a800e10001a3b400cc00012acc00e00001a6d8002001029c9fe000e80002a125e800f00002a3a6f00025010125f0001d0101a120015001039f9c9a2801300101a33001380101253801400101a34001480101a84801500101a35001580101a150016801019f50016801029c195801600101a36001700101a168019801039c9a9770017801019f7801800101a180019801019f9801b601011e9801ae01019c9801b001021916b001f401019ab001f8010197b001e0010195b801c001011ec001c801019fc801d001011ed001d80101a3d801e001011ee001e801019ce001f8010193e801f001011ef001ff01019cf80128020197f801280202951200020802019a08021002019c10022802019a280240020219952802400201932802340201903402480201894002480201824802500202129550028502021ea158027002012a5802700201ad70028e0202a62a8802b80202878e9002980201a89002cc02029fa39002d002048e93979a9802a002012aa002d50201a8d002000302068ed802e002029aa6d802e80203a11295e002e802029ca8e802000303a1ad1ee802000302a69a00031603041ea6959a00031e03012a1803480302878e2003280301a820035c03029fa320036003048e93979a28033003012a3003480301a84803660301a66003a803018968037003029aa66803780303a1121870037803029ca87803840302a3af7803a803012a7803980303189a1e84039c0302a1ad9c03a803011e9c03b003012aa803d803018bb003b80301a8b003ec03021ea3b003cc03019cb003f003021297b803c003012ac003cc0301a8cc03e40301a6cc03f003019ae403ef0301a3f0032004023884fc031004032a361efc03100403af9fa31004180406a8afb49c9fa31804200406a8afb49c9fa32004280406a8afb49c9fa32804300406a6afb29a9fa33004380406a6afb29a9fa33804400406a6afb29a9fa3400448040725abaf31199fa3480450040725abaf31199fa350045c040725abaf31199fa35c04680406a6afb29a9fa368047e0406a3abaf979a9f8004b004038b38848c04a004032a361e8c04a00403af9fa3a004a80406abafb79fa3a8a804b004062aaf361e9fa3b004b80406a8afb49c9fa3b804c004062aaf361e9fa3c004c80406a8afb49c9fa3c804d00406a6afb29a9fa3d004d80406a8afb49c9fa3d804e00406a6afb29a9fa3e004ea040325af31e004ec0403199fa3ea04ec0401b4ec04f70403a6afb2ec04f804039a9fa3f804160503a3abaff8040e0503979c9f10054005023d8918052005039fab932005280504a1a8ad952005300502199c28053005032531193005380504a3abaf9730053f05029c9f38053f05039fab9340057005023e0a48055005079f25a8ab93199c50055805079f25a8ab93199c58056005079f25a8ab93199c60056805079f25a8ab93199c6805700507a125a8ad95199c70058605079f25a8ab93199c8805b805023f8b90059805039fab939005a80501a69005a00502979a9805a00503a1ad95a005a80503a6b29aa805b00503a3af97a805b70503ab9a9fb005b705039fab93b805e80502010dc005c805079fa3a8ab93979cc805d005079fa3a8ab93979cd005d805079fa3a8ab93979cd805e005079fa3a8ab93979ce005e80507a1252aad95191ee805fe05079fa3a8ab93979c0006300602828e08061006039fab930806200602a3a60806180602979a1006180603a1ad951806200603a8b49c2006280603a6b29a20062f0604abaf9fa328062f0603a3af97300660060284903806400606a3abaf979a9f4006480606a3abaf979a9f4806500606a3abaf979a9f5006580606a3abaf979a9f580660060625ad31199ca16006680606a3abaf979a9f6806700606a6afb29a9fa37006770606a8afb49c9fa37806a80601ad7806a806011e7906a80602b2a17b06a80602b9a67d06a806012aa806c00601ada806c006011da906c00602b2a1ab06c00601b9ab06c00601a3ad06c00601a6af06c0060129c006f00601adc006ed06019cc106f00601b2c106ed06019fc306f00601b9c306ed0601a1c506ed0601a6c706ed0601a8f006080702a195f106080702a89cf206080702ad9ff3060807012508073707021ea108071e0701820c071007018910071407018e14071807011218071c0701951c071f07019a20073607010624072807010d28072c0701122c073007019530073407011934073807011e3807480702a12438074e0701893c074007011140074407019544074807011848074f0701a648074c07011d4c074f0701a150077f07021ea150076607018254075807018958075c07018e5c076007011260076407019564076707019a68077e0701066c077007010d70077407011274077807019578077c0701197c078007011e8007900702a12480079607018984078807011188078c0701958c07900701189007940701a19007970701a194079707011d9807a807021ea698079c0701829c07a0070189a007a407018ea407a8070112a807b00702a1a8a807ac070195ac07b007019ab007c80701a6b007c807012ab007b407011eb407b80701a1b807bc07011ebc07c007019ac007c4070195c407c8070112c807d807021ea6c807cc070195cc07d0070112d007d407018ed407d8070189d807df0702a62ad807dc07018edc07df070189e007e80702a82ce007e4070184e407e807018be807f00702a62ae807ec070190ec07f0070114f007f80702a3a6f007f4070197f407f807019cf8070d0802a3a6f807fc070120f807ff070120fc070008019c00080808011e00080408019704080808011408081008019a08080c0801900c081008018b10081c08019a10081408018414081808018b18081c0801901c08270801971c082008011420082408019024082708018b2808580801a328083e0801892c083008019030083408019334083808019738083c0801193c083f08019f40085608018744084808018e48084c0801934c085008019750085408019a54085708019f58086808012558086e0801065c086008010d60086408011264086808019568086f08012a68086b0802a1196c087008011e7008a00801a370088608018974087808019078087c0801937c088008019780088408011984088708019f88089e0801878c089008018e90089408019394089808019798089c08019a9c089f08019fa008b0080125a008b6080106a408a808010da808ac080112ac08b0080195b008b708012ab008b30802a119b408b808011eb808d00801abb808ce080184bc08c008018bc008c4080190c408c8080193c808cc080197cc08cf08019cd008d708019fd408dc08019fd808dc0801a3dc08e808022a1ee008e408019fe408e80801a3e808f40802271bec08f008019ff008f40801a3f408ff0802a89cf808fb08019ffc08000901a30009170901af00091609011b04090809019f08090c0901a30c09100901a31009140901ab14092f0901af18092e09019c1c092009019f2009240901a32409280901a328092c0901ab2c09300901af3009460902ad9530093409011934093809011d38093c0901a13c09400901254009440901294409470901ad48097709022aad48095e09018e4c095009019550095409019a54095809011e58095c0901a15c095f0901a660096409019560097609011264096809011968096c09011e6c09700901a170097409012574097809012a7809880902ad3078097c09011878098e0901957c098009011d8009840901a184098809012488098f0901b288098c0901298c098f0901ad9009bf09022aad9009a609018e94099809019598099c09019a9c09a009011ea009a40901a1a409a70901a6a809ac090195a809be090112ac09b0090119b009b409011eb409b80901a1b809bc090125bc09c009012ac009d00902ad30c009c4090118c009d6090195c409c809011dc809cc0901a1cc09d0090124d009d40901add009d70901add409d7090129d809e80901b2d809dc09019ad809ee090118dc09e009011de009e40901a1e409e80901a6e409ef090124e809ef0901adec09f0090129f009000a0135f009f409011df009060a019af409f80901a1f809fc090124fc09000a0129fc09070a01a6000a070a01b2040a080a01ad080a180a01b9080a0c0a01a1080a1e0a011d0c0a100a0124100a140a01a6140a180a01ad140a1f0a0129180a1f0a01351c0a200a0130200a380a01b9200a360a01a1240a280a0122280a2c0a01a62c0a300a01ad300a340a01b2340a370a012e380a650a01b7380a4e0a019f3c0a400a0122400a440a01a6440a480a01ab480a4c0a01b24c0a4f0a012e500a540a019f500a660a011e540a580a0122580a5c0a01a65c0a600a01ab600a640a01b2640a670a012e680a980a01b7680a6c0a019f680a7e0a011d6c0a700a0122700a740a01a6740a780a01ab780a7c0a01b27c0a7f0a012e800a840a019f800a960a019c840a880a0122880a8c0a01a68c0a900a01ab900a940a01b2940a970a012e980aa80a013a980a9c0a011d980aae0a019a9c0aa00a0122a00aa40a01a6a40aa80a0129a80aac0a01bea80aaf0a01beac0aaf0a01b2b00ae00a01abb00ac80a0118b40ab80a019cb80abc0a019fbc0ac00a019fc00ac40a01a6c40ac80a0122c80ae00a0116cc0ad00a019ad00ad40a011dd40ad80a019fd80adc0a01a6dc0ae00a0122e00af00a012ee00af80a0195e40ae80a019ae80aec0a011dec0af00a0122f00af70a01b2f00af40a0129f40af80a012ef80a000b02b235f80a400b0193fc0a000b019a000b080b0230b4000b040b011d040b080b019f080b100b022eb2080b0c0b01220c0b100b01a6100b1c0b02ad30100b140b0129140b180b01ab180b1c0b01291c0b300b02ab2e1c0b200b01a6200b240b0122240b270b019f280b2c0b011d2c0b300b019f300b380b0229ad300b340b011d340b380b019a380b400b02a8ab380b3c0b01163c0b400b0193400b480b02a629400b440b0187440b480b018e480b500b0224a8480b4c0b01114c0b500b0193500b580b0222a6500b540b0116540b580b019a580b600b02a124580b5c0b011d5c0b600b019a600b680b029f22600b640b0116640b680b0193680b780b021da1680b6c0b01116c0b6f0b018e700b880b0116700b740b0187740b780b018e780b800b029c9f780b7c0b01877c0b800b018e800b880b029a1d800b840b0187840b870b018e880bb80b029a9c880b980b0193880b8c0b01898c0b900b0190900b940b0189940b980b0190980ba00b0195980b9c0b01899c0ba00b0190a00bb00b0197a00ba40b0189a40ba80b0190a80bac0b0189ac0bb00b0190b00bb90b019ab00bb40b0189b40bb80b0190b80bc70b029c9fb80bcd0b0119b80bbc0b0189bc0bc00b0190c00bc40b0189c40bc80b0190c80bcf0b039c9fa3c80bcc0b0189cc0bd00b0190d00b000c029a9cd00be00b0193d00bd40b0189d40bd80b0190d80bdc0b0189dc0be00b0190e00be80b0195e00be40b0189e40be80b0190e80bf80b0197e80bec0b0189ec0bf00b0190f00bf40b0189f40bf80b0190f80b010c019af80bfc0b0189fc0b000c0190000c0f0c029c9f000c150c0119000c040c0189040c080c0190080c0c0c01890c0c100c0190100c170c019c100c1f0c029fa3100c140c0189140c170c0190180c200c019a180c1c0c01891c0c200c0184200c280c03a1252a200c240c0189240c280c0190280c300c039fa3a8280c2c0c01892c0c300c0190300c480c019f300c480c01a3300c380c019a300c340c0195340c380c0190380c400c0197380c3c0c01953c0c400c019c400c480c019a400c440c0195440c480c0190480c5e0c029fa1480c4f0c0197480c4c0c01954c0c500c0190500c580c0119500c540c0189540c580c0190580c600c019c580c5c0c01895c0c5f0c0184600c680c039a9fa3600c640c0189640c680c0184680c700c03a1252a680c6c0c01896c0c700c0190700c780c039fa3a8700c740c0189740c780c0190780c900c019f780c900c01a3780c800c019a780c7c0c01957c0c800c0190800c880c0197800c840c0195840c880c019c880c900c019a880c8c0c01958c0c900c0190900ca60c029fa1900c970c0197900c940c0195940c980c0190980ca00c0119980c9c0c01959c0ca00c0190a00ca80c019ca00ca40c0195a40ca70c0190a80cd80c01a8a80cd80c019aa80cb80c0193ac0cb00c019cb00cb40c019fb40cb80c01a3b80cbc0c019fb80cc00c0195bc0cbf0c019cc00cd00c0197c40cc80c019cc80ccc0c019fcc0cd00c01a3d00cd40c019fd00cd80c019ad40cd70c019cd80ce80c01abd80ced0c0119dc0ce00c019ce00ce40c019fe40ce80c01a3e80cef0c01afe80cec0c0125ec0cef0c01a8f00c200d01a8f00c200d019af00c000d0193f40cf80c019cf80cfc0c019ffc0c000d01a3000d040d019f000d080d0195040d070d019c080d180d01970c0d100d019c100d140d019f140d180d01a3180d1c0d019f180d200d019a1c0d1f0d019c200d300d01ab200d350d0119240d280d019c280d2c0d019f2c0d300d01a3300d370d01af300d340d0125340d370d01a8380d990d01b4380d540d019f3c0d400d01a3400d440d01a6440d480d01a8480d4c0d01ab4c0d4f0d01af500d690d019f540d580d01a3580d5c0d01a65c0d600d01a8600d630d01ab640d680d0131680d7e0d019f6c0d700d01a3700d740d01a6740d780d01a8780d7c0d01ab7c0d7f0d01af800d9c0d019f840d880d0122880d8c0d01a68c0d900d01a8900d940d01ab940d970d012e980db00d01b2980dad0d019f9c0da00d0122a00da40d01a6a40da80d01a8a80dac0d01abac0daf0d0130b00dc60d02b49fb40db80d0122b80dbc0d01a6bc0dc00d01a8c00dc40d01abc40dc70d012ec80df50d011ecc0dd00d01a1d00dd40d0125d40dd80d012ad80ddc0d01addc0ddf0d0131e00df80d0136e00df80d01b9f80d180e0136f80d100e011e100e3d0e011e140e180e0122180e200e0231b4180e1c0e01251c0e200e01a8200e280e02b236200e240e012a240e270e012e280e5d0e0231b4400e580e011e580e850e011e5c0e600e01a1600e680e02afb2600e640e01a3640e680e01a6680e700e0231b4680e6c0e012a6c0e6f0e01ad700e7c0e02afb27c0e940e01b27c0e940e0136880ea00e011e940ea80e02afb2a00ecd0e019ca40ea80e019fa80eb00e02ad31a80eac0e01a1ac0eb00e0125b00eb80e02afb2b00eb40e01a8b40eb70e01abb80ee50e02ad31d00ee80e019ce80e160f019aec0ef00e019cf00ef80e02afabf00ef40e019ff40ef80e01a3f80e000f0231adf80efc0e01a6fc0eff0e01a8000f080f01af000f180f01ab080f100f01b4100f180f01af180f200f01ad180f360f012a180f2e0f029c19190f2e0f011e1b0f2e0f01a11c0f2f0f0125200f280f01af280f370f01ad300f5e0f010d340f380f0193380f400f02aba8380f3c0f01973c0f400f0119400f480f02ad2a400f440f019c440f470f019f480f600f03aba8a3600f7e0f012a600f760f0422199c12780fa60f01957c0f800f0197800f880f022aa6800f840f019a840f880f011e880f900f02aba8880f8c0f01a18c0f8f0f01a3900f980f012a900fa80f01a6980fa00f01afa00fa80f012aa80fb00f01a8a80fbe0f02a693a90fbe0f0197ab0fbe0f019aac0fbf0f019cb00fb80f012ab80fc70f01a8c00fed0f0112c40fc80f0195c80fd00f02a3a6c80fcc0f0197cc0fd00f019ad00fd80f0225a8d00fd40f011ed40fd70f01a1d80ff00f02a3a6f00f061002a125f00f0810029319f00ffc0f0190fc0f08100189081010100282891010181002129518104d10021ea120103810012a2010381001ad20104d1001183810581002a62a5010801002878e5810601001a858109410029fa358109810048e93979a60106810012a68109d1001a89810c8100189a010a810029aa6a010b01003a11295a810b010029ca8b010c81002a1adb010c810032a9a1eb010e0100118c810e010021ea6c810e810012ac810e010019ae0101011018be810f01001a8e8102411021ea3e8101011019ce8102811021297f010f810012af810101101a81011261101a610112811019a28117011010630113811019a30114011019538114011019c40115811029a1e4011581101a358116d1103959a1e7011a011018478118011019f7811881102979a8011881101a188119f1102a6a388119e11019f8811a0110190a011b61104a39a9f9cb811e8110189c011c81101a3c011d01102199fc411d0110190c811d0110125d011e811032aa125d011e81101ade811fe1103a1199fe8110012019500121612018204120812018908120c12018e0c121012011210121312019514121812019a18122e1201061c122012010d20122412011224122812019528122c1201192c122f12011e30124612018234123812018938123c12018e3c124012011240124412019544124712019a48125e1201064c125012010d50125412011254125812019558125c1201195c125f12011e601278120224a160128d12018964126812011168126c1201956c127012011870127412011d74127812019f78128e1203a61da19012a612018e94129812019598129c12019a9c12a012011ea012a41201a1a412a71201a6a812be120112ac12b0120119b012b412011eb412b81201a1b812bc120125bc12bf12012ac012d612018ec412c8120195c812cc12019acc12d012011ed012d41201a1d412d71201a6d812ee120112dc12e0120119e012e412011ee412e81201a1e812ec120125ec12ef12012af01208130130f0121d1302ad95f412f8120118f812fc12011dfc12001301a100130413012404131e13012908131e1301b22013381301302013501301ad20134d13019524132813011828132c13011d2c13301301a130133413012434134e1301293813501301b25013661301355013681301896813b0130236b96813981301826c137013018970137413018e74137813011278137c1301957c138013019a80138813011e8813901301a19013981301a69813a013012aa013a81301ada813af1301b2b013e01302ad9ab113e01302b2a1b213e0130236a6b313e01302b92a`)
            music.play(clair_de_lune, music.PlaybackMode.UntilDone)
        }
    } else {
        // Generated from fur-elise.mid
        // Drum tracks transposed -2 octave(s)
        fur_elise = music.createSong(hex`004b0001102d0100001c00010a006400f401640000040000000000000000000000000005000004b0040000040001350400080001b408000c0001350c00100001b410001400013514001800013018001c0001331c002000013120002700012e20002400011624002800011d28002b0001222c003000012530003400012934003800012e38003f00013038003c0001113c004000011d4000430001a144004800012948004c0001ad4c005000013050005700013150005400011654005800011d58005b0001225c00600001296000640001356400680001b468006c0001356c00700001b470007400013574007800013078007c0001337c008000013180008700012e80008400011684008800011d88008b0001228c009000012590009400012994009800012e98009f00013098009c0001119c00a000011da000a30001a1a400a8000127a800ac000131ac00b0000130b000bf00012eb000b4000116b400b800011db800bb000122c000c4000135c400c80001b4c800cc000135cc00d00001b4d000d4000135d400d8000130d800dc000133dc00e0000131e000e700012ee000e4000116e400e800011de800eb000122ec00f0000125f000f4000129f400f800012ef800ff000130f800fc000111fc000001011d0001030101a104010801012908010c0101ad0c011001013010011701013110011401011614011801011d18011b0101221c01200101292001240101352401280101b428012c0101352c01300101b430013401013534013801013038013c0101333c014001013140014701012e40014401011644014801011d48014b0101224c015001012550015401012954015801012e58015f01013058015c0101115c016001011d6001630101a164016801012768016c0101316c017001013070017701012e70017401011674017801011d78017b0101227c018001013080018401013184018801013388019301013588018c0101198c019001012090019301012594019801012c98019c0101369c01a0010135a001ab010133a001a4010114a401a8010120a801ab010124ac01b001012ab001b4010135b401b8010133b801c3010131b801bc010116bc01c001011dc001c3010122c401c8010129c801cc010133cc01d0010131d001d7010130d001d2010111d401d801011dd801db010129dc01e0010129e001e3010135e401e8010129e801eb010135ec01f0010135f401f80101b4f801fb010135fc01000201b40002030201350402080201b408020b0201350c02100201b41002140201351402180201b418021c0201351c02200201b420022402013524022802013028022c0201332c023002013130023702012e30023402011634023802011d38023b0201223c024002012540024402012944024802012e48024f02013048024c0201114c025002011d5002530201a154025802012958025c0201ad5c026002013060026702013160026402011664026802011d68026b0201226c02700201297002740201357402780201b478027c0201357c02800201b480028402013584028802013088028c0201338c029002013190029702012e90029402011694029802011d98029b0201229c02a0020125a002a4020129a402a802012ea802af020130a802ac020111ac02b002011db002b30201a1b402b8020127b802bc020131bc02c0020130c002c702012ec002c4020116c402c802011dc802cb020122cc02d0020130`)
        music.play(fur_elise, music.PlaybackMode.UntilDone)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monster_3, function (sprite, otherSprite) {
    if (head_cooldown) {
        health_player.value += -20
        head_cooldown = false
        timer.after(1000, function () {
            head_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "baby"
    }
})
function mansion_room () {
    if (can_mansion) {
        can_mansion = false
        victorian_mansion = [
        tilemap`level14`,
        tilemap`level15`,
        tilemap`level16`,
        tilemap`level17`,
        tilemap`level18`,
        tilemap`level19`,
        tilemap`level20`,
        tilemap`level21`,
        tilemap`level22`,
        tilemap`level23`,
        tilemap`level24`,
        tilemap`level25`,
        tilemap`level26`
        ]
        tiles.setCurrentTilemap(victorian_mansion[0])
        victorian_room_number = 0
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        bab_chase = false
        ben_chase = false
        deer_chase = false
        demon_chase = false
        goop_chase = false
        parasite_chase = false
        ringu_chase = false
        bug_chase = false
        face_chase = false
        otto_chase = false
        siren_chase = false
        lisa_chase = false
        wall_chase = false
        spooper_chase = false
        husks_chase = false
        guard_chase = false
        cow_chase = false
        bekka_chase = false
        face_chase = false
        charles_chase = false
        hanged_chase = false
        hooked_chase = false
        head_chase = false
        man_chase = false
    }
}
scene.onOverlapTile(SpriteKind.Specimen_1, assets.tile`myTile1`, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_6, function (sprite, otherSprite) {
    if (ben_cooldown) {
        health_player.value += -45
        ben_cooldown = false
        timer.after(3000, function () {
            ben_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "ben"
    }
})
function spooper_ () {
    spooper_spores = false
    sprites.destroyAllSpritesOfKind(SpriteKind.Unknown_specimen_3)
    if (spooper_chase) {
        if (spooper_room < 0) {
            timer.after(500, function () {
                if (spooper_room == -5) {
                    spooper = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 5 5 5 5 . . . . . . 
                        . . . . . . 5 5 5 5 . . . . . . 
                        . . . . . 5 5 5 5 5 5 . . . . . 
                        . . . . . 5 f 5 5 f 5 . . . . . 
                        . . . . . 5 5 5 5 5 5 . . . . . 
                        . . . . 5 5 5 5 5 5 5 5 . . . . 
                        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                        . . . . 5 5 5 5 5 5 5 5 . . . . 
                        . . . . 5 5 5 5 5 5 5 5 . . . . 
                        . . . . . 5 5 5 5 5 5 . . . . . 
                        . . . . . 5 5 5 5 5 5 . . . . . 
                        . . . . . f c c c c f . . . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.Unknown_specimen_3)
                } else if (spooper_room == -4) {
                    spooper = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 5 5 4 5 . . . . . . 
                        . . . . . . 4 4 4 5 . . . . . . 
                        . . . . . 5 5 5 5 5 5 . . . . . 
                        . . . . . 5 f 5 5 f 5 . . . . . 
                        . . . . . 5 5 5 5 5 5 . . . . . 
                        . . . . 5 5 b b 5 5 4 5 . . . . 
                        . . . 5 5 b b 5 4 5 4 4 5 . . . 
                        . . . 5 4 4 5 5 4 4 5 4 5 . . . 
                        . . . 5 5 5 4 5 b b 5 5 4 . . . 
                        . . . . 5 4 4 5 b 4 5 5 . . . . 
                        . . . . 4 4 5 4 4 4 4 5 . . . . 
                        . . . . . 5 4 4 5 5 5 . . . . . 
                        . . . . . 4 4 5 5 5 5 . . . . . 
                        . . . . . f c c c c f . . . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.Unknown_specimen_3)
                } else if (spooper_room == -3) {
                    spooper = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 5 5 4 5 . . . . . . 
                        . . . . . . 4 4 4 5 . . . . . . 
                        . . . . . 5 5 5 5 5 5 . . . . . 
                        . . . . . 5 f 5 5 f 5 . . . . . 
                        . . . . . 5 f 5 5 f 5 . . . . . 
                        . . . . 5 5 b 2 5 5 4 5 . . . . 
                        . . . 5 5 2 2 2 4 5 4 4 5 . . . 
                        . . . 5 2 4 5 5 4 4 5 4 5 . . . 
                        . . . 5 5 5 4 5 b 2 2 5 4 . . . 
                        . . . . 5 4 4 2 2 2 5 5 . . . . 
                        . . . . 4 4 5 2 4 4 4 5 . . . . 
                        . . . . . 5 4 4 5 5 5 . . . . . 
                        . . . . . 4 4 5 5 5 5 . . . . . 
                        . . . . . f c c c c f . . . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.Unknown_specimen_3)
                } else if (spooper_room == -2) {
                    spooper = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 5 5 4 5 . . . . . . 
                        . . . . . . 4 4 4 5 . . . . . . 
                        . . . . . 5 5 5 5 5 5 . . . . . 
                        . . . . . 5 f 5 5 f 5 . . . . . 
                        . . . . . 5 f 5 5 f 5 . . . . . 
                        . . . . 5 5 b 2 2 2 4 5 . . . . 
                        . . . 5 5 2 2 2 2 3 3 4 5 . . . 
                        . . . 5 2 2 2 3 3 3 5 4 5 . . . 
                        . . . 5 2 3 3 3 b 2 2 5 4 . . . 
                        . . . . 5 4 4 2 2 2 3 5 . . . . 
                        . . . . 4 4 5 2 2 3 3 5 . . . . 
                        . . . . . 2 2 3 3 5 5 . . . . . 
                        . . . . . 4 4 5 5 5 5 . . . . . 
                        . . . . . f c c c c f . . . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.Unknown_specimen_3)
                } else if (spooper_room == -1) {
                    spooper = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 5 5 4 5 . . . . . . 
                        . . . . . . 4 2 2 2 . . . . . . 
                        . . . . . 5 2 2 2 5 5 . . . . . 
                        . . . . . 5 f 5 5 f 5 . . . . . 
                        . . . . . 5 f 5 5 f 5 . . . . . 
                        . . . . 5 5 b 2 2 2 4 5 . . . . 
                        . . . 5 5 2 2 2 2 3 2 4 5 . . . 
                        . . . 5 2 2 2 3 2 2 2 2 5 . . . 
                        . . . 5 2 3 2 1 1 4 4 5 4 . . . 
                        . . . . 2 2 1 f f 1 2 5 . . . . 
                        . . . . 4 4 5 1 1 2 2 5 . . . . 
                        . . . . . 2 2 3 2 2 2 . . . . . 
                        . . . . . 4 2 2 2 3 5 . . . . . 
                        . . . . . f 2 3 3 c f . . . . . 
                        . . . . . 2 3 3 f f f . . . . . 
                        `, SpriteKind.Unknown_specimen_3)
                    spooper_room += randint(30, 39)
                }
                tiles.placeOnRandomTile(spooper, assets.tile`myTile1`)
                spooper_room += 1
                spooper_spores = false
            })
        } else if (spooper_room > 0) {
            spooper_room += -1
            spooper_spores = true
            for (let value12 of tiles.getTilesByType(assets.tile`myTile`)) {
                tiles.setTileAt(value12, assets.tile`myTile50`)
            }
        } else if (spooper_room == 0) {
            spooper_spores = false
        } else {
            spooper_room += 1
            spooper_spores = false
        }
    }
}
function mansion_man_search (doorX: number, doorY: number, basement: boolean) {
    man_cooldown = true
    tiles.setWallAt(tiles.getTileLocation(doorX, doorY), true)
    old_man_check = false
    mySprite.sayText("Hide!", 5000, false)
    timer.after(5000, function () {
        specimen12 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f 5 5 4 4 f . . . . . 
            . . . . . f 5 4 4 4 f . . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f e f c c c c f e b b . . 
            . . . f e f c c c c b 1 1 1 1 . 
            . . . f e f c c b b d e f 1 1 . 
            . . . f e f b b d c f e f 1 1 1 
            . . . f b b d c c c f e f . 1 1 
            . . b b d f f f f f f f f . 1 . 
            . b d . . f c c c c f . . 1 1 . 
            . . . . . f c c c c f . 1 1 . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Specimen_12)
        tiles.placeOnTile(specimen12, tiles.getTileLocation(doorX, doorY))
        man_wander_target = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Man_Wander)
        if (basement == false) {
            tiles.placeOnRandomTile(man_wander_target, assets.tile`myTile7`)
        } else {
            tiles.placeOnRandomTile(man_wander_target, assets.tile`myTile40`)
        }
        timer.after(500, function () {
            tiles.setWallAt(tiles.getTileLocation(doorX, doorY), false)
            old_man_check = true
            scene.followPath(specimen12, scene.aStar(specimen12.tilemapLocation(), man_wander_target.tilemapLocation()), 60)
            timer.after(1000, function () {
                tiles.setWallAt(tiles.getTileLocation(doorX, doorY), true)
            })
            timer.after(randint(15000, 17000), function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.Man_Wander)
                tiles.setWallAt(tiles.getTileLocation(doorX, doorY), false)
                old_man_check = false
                scene.followPath(specimen12, scene.aStar(specimen12.tilemapLocation(), tiles.getTileLocation(doorX, doorY)), 60)
                timer.after(3000, function () {
                    sprites.destroyAllSpritesOfKind(SpriteKind.Specimen_12)
                })
            })
        })
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    if (bedroom_key) {
        mansion_navigate(0, 5, 1, 3, 8, 3)
        if (Math.percentChance(25)) {
            if (victorian_room_number == 5) {
                mansion_man_search(9, 3, false)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    mansion_navigate(1, 2, 5, 5, 7, 14)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monster_2, function (sprite, otherSprite) {
    if (bag_cooldown) {
        health_player.value += -20
        bag_cooldown = false
        timer.after(1000, function () {
            bag_cooldown = true
        })
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        kill_credit = "bag"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    mansion_navigate(2, 3, 9, 3, 1, 2)
    if (victorian_room_number == 3) {
        mansion_man_search(0, 2, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    if (bedroom_key) {
        mansion_navigate(0, 6, 15, 3, 1, 3)
        if (victorian_room_number == 6) {
            mansion_man_search(0, 3, false)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    mansion_navigate(0, 7, 1, 11, 9, 5)
})
function not_cherry_picking (chase_picked: string) {
    if (chase_picked == "gel") {
        gel_room = randint(10, 14)
    } else if (chase_picked == "bug") {
        bug_room = randint(10, 14)
    } else if (chase_picked == "ringu") {
        ringu_room = randint(10, 14)
    } else if (chase_picked == "bab") {
        bab_room = randint(10, 14)
    } else if (chase_picked == "ben") {
        ben_room = randint(15, 17)
    } else if (chase_picked == "wall") {
        wall_room = randint(10, 19)
    } else if (chase_picked == "deer") {
        deer_room = randint(20, 24)
    } else if (chase_picked == "parasite") {
        parasite_room = randint(10, 19)
    } else if (chase_picked == "demon") {
        demon_room = randint(20, 24)
    } else if (chase_picked == "man") {
        man_room = randint(20, 24)
    } else if (chase_picked == "siren") {
        siren_room = randint(20, 24)
    } else if (chase_picked == "face") {
        face_room = randint(20, 24)
    } else if (chase_picked == "otto") {
        otto_room = randint(20, 24)
    } else if (chase_picked == "spooper") {
        if (spooper_room == 0 || spooper_room < -5) {
            spooper_chase = true
            spooper_room = -5
        }
    } else if (chase_picked == "tirsiak") {
        tirsiak_room = randint(20, 24)
    } else if (chase_picked == "lisa") {
        lisa_room = randint(20, 24)
    } else if (chase_picked == "guard") {
        guard_room = randint(20, 24)
    } else if (chase_picked == "bag") {
        bag_room = randint(20, 24)
    } else if (chase_picked == "baby") {
        baby_room = randint(20, 24)
    } else if (chase_picked == "hanged") {
        hanged_room = randint(20, 24)
    } else if (chase_picked == "cow") {
        cow_room = randint(20, 24)
    } else if (chase_picked == "bekka") {
        bekka_room = randint(20, 24)
    } else if (chase_picked == "husks") {
        husks_room = randint(20, 24)
    } else if (chase_picked == "charles") {
        charles_room = randint(20, 24)
    } else if (chase_picked == "hooked") {
        hooked_room = randint(20, 24)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Specimen_13, function (sprite, otherSprite) {
    if (siren_cooldown) {
        if (player_on_crate == false) {
            health_player.value += -45
            siren_cooldown = false
            timer.after(3000, function () {
                siren_cooldown = true
            })
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
            kill_credit = "siren"
        }
    }
})
let old_man_lines: string[] = []
let angle4 = 0
let angle3 = 0
let angle2 = 0
let lastXF = 0
let lastYF = 0
let angle = 0
let hooked_difference = 0
let dyhooked = 0
let dxhooked = 0
let dyhanged = 0
let dxhanged = 0
let ben_visible = false
let difference = 0
let angle_to_enemy = 0
let dy = 0
let dx = 0
let looking_direction = 0
let lisa_difference = 0
let angle_to_lisa = 0
let dylisa = 0
let dxlisa = 0
let hanged_difference = 0
let spooper: Sprite = null
let spooper_spores = false
let spooper_chase = false
let fur_elise: music.Playable = null
let clair_de_lune: music.Playable = null
let monster3: Sprite = null
let head_cooldown = false
let demon_lines: string[] = []
let specimen11: Sprite = null
let door_invisible: Sprite = null
let specimen_4: Sprite = null
let specimen_5: Sprite = null
let unknownspecimen2: Sprite = null
let cow_apparition: Sprite = null
let monster5: Sprite = null
let enemy_names: string[] = []
let sound_change = ""
let apparition_hanged_man: TextSprite = null
let hanged_man_announcement: string[] = []
let monster4: Sprite = null
let hanged_observed = 0
let gel_spawn: Sprite = null
let goop_puddle: Sprite = null
let specimen2: Sprite = null
let water_where: Sprite = null
let player_on_crate = false
let siren_rooms: tiles.TileMapData[] = []
let specimen13: Sprite = null
let siren_cooldown = false
let room_skip = 0
let data_reset_confirmation = ""
let message_toggle = 0
let volume_save = 0
let settings_menu: Sprite = null
let exit_key = false
let can_mansion = false
let face_speed = 0
let whice_face_apparition: Sprite = null
let unknownspecimen1: Sprite = null
let face_cooldown = false
let jumpscare: Sprite = null
let old_man_check = false
let man_wander_target: Sprite = null
let ringu_cooldown = false
let gel_cooldown = false
let library_key = false
let ease_number = 0
let t_number = 0
let room_number = 0
let x_number = 0
let monster2: Sprite = null
let bag_cooldown = false
let hanged_cooldown = false
let terminal_entry = ""
let extra_menu: Sprite = null
let parasite_cooldown = false
let shadow_animal: Sprite = null
let unknownspecimen4: Sprite = null
let gooped = false
let lisa_apparition: TextSprite = null
let lisa_announcement: string[] = []
let unknownspecimen5: Sprite = null
let lisa_appear = false
let lisa_cooldown = false
let lisa_observed = 0
let specimen7: Sprite = null
let wall_rooms: tiles.TileMapData[] = []
let chase_picking_yippee = ""
let roomRandom: tiles.TileMapData[] = []
let room_type = 0
let tirsiak_cooldown = false
let otto_cooldown = false
let stamina_use = false
let axe_weapon: Sprite = null
let canFight = false
let yF = 0
let xF = 0
let game_active = false
let stunned_ben: Sprite = null
let parlor_key = false
let specimen1: Sprite = null
let parasite_form = 0
let specimen10: Sprite = null
let parasite_form_until_hit = false
let woormy_charles_doll: Sprite = null
let charles_appear = false
let charles_cooldown = false
let charles_gets_hit = false
let charles_health = 0
let stunned_bug: Sprite = null
let husks_doll: Sprite = null
let bekka_apparition: Sprite = null
let monster6: Sprite = null
let bekka_appear = false
let bekka_cooldown = false
let death_quote_position = ""
let specimen12: Sprite = null
let old_man_found = false
let man_cooldown = false
let old_man_stamina = 0
let victorian_room_number = 0
let husks_cooldown = false
let deer_lines: string[] = []
let ring_deer: Sprite = null
let specimen8: Sprite = null
let deer_cooldown = false
let partbug3: Sprite = null
let partbug2: Sprite = null
let partbug1: Sprite = null
let specimen_3: Sprite = null
let stamina_bar: StatusBarSprite = null
let idle_timer = 0
let game_save_file = 0
let rooooooooom: Sprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let save_file_menu: Sprite = null
let bab_cooldown = false
let spooper_room = 0
let death_quotes: string[] = []
let hooked_room = 0
let charles_chase = false
let charles_room = 0
let husks_chase = false
let husks_room = 0
let bekka_chase = false
let bekka_room = 0
let cow_chase = false
let cow_room = 0
let hanged_chase = false
let hanged_room = 0
let head_chase = false
let baby_room = 0
let body_chase = false
let bag_room = 0
let guard_room = 0
let lisa_chase = false
let lisa_room = 0
let otto_chase = false
let otto_room = 0
let face_chase = false
let face_room = 0
let forest_chase = false
let tirsiak_room = 0
let siren_chase = false
let siren_room = 0
let man_chase = false
let man_room = 0
let demon_chase = false
let demon_room = 0
let parasite_chase = false
let parasite_room = 0
let deer_chase = false
let deer_room = 0
let wall_chase = false
let wall_room = 0
let ben_room = 0
let bab_chase = false
let bab_room = 0
let ringu_chase = false
let ringu_room = 0
let bug_chase = false
let bug_room = 0
let goop_chase = false
let gel_room = 0
let book_secret = false
let victorian_mansion: tiles.TileMapData[] = []
let bedroom_key = false
let bug_cooldown = false
let hooked_chase = false
let hooked_doll: Sprite = null
let hooked_cooldown = false
let cow_cooldown = false
let monster1: Sprite = null
let guard_chase = false
let mySprite: Sprite = null
let TOTAKETHEDEAD: Sprite = null
let guard_cooldown = false
let kill_credit = ""
let health_player: StatusBarSprite = null
let demon_cooldown = false
let ben_chase = false
let specimen_6: Sprite = null
let ben_cooldown = false
let title2: TextSprite = null
let title: TextSprite = null
settings_check()
color.startFade(color.Black, color.originalPalette, 100)
scene.setBackgroundImage(img`
    fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
    fffffffccffffcffffffbfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
    fffffffcffffffbffffffddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
    ffffffcffffffffbdffffddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
    fcfffffffcdcdffdffdccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
    fffffffffdbddcfffffcddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
    fcffffbffbffffffffbbddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
    fcbffffffcfffffffcdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
    fdcccffffdbffcffccdddd111111111111111111cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
    fffffffffffffffcdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
    ffffffffffffffcbddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
    fffffffddcfffdddddd11111111111111111111ccccc11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
    fffffffdddbffbddd111111111111111111111cccccc111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
    ffffffcbfcccddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
    fffffffffcfddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
    ffffffffdfcdddd1111111d11111d111111111cccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
    ffffffffcfbddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
    fffffffcdcdddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
    fffffbfffcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    fccffdcbfbddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    fffcffcdfbdd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    ffddfffbbbdd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
    cfdffffbcdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
    ffffffccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
    ffcfffbdb111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
    fffffcddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
    fffffbdddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
    ffffcbddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
    fffccddddd11111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
    ffdcbddddd11111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
    ffccddddddd11111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
    ffcbdddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
    ffcbddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
    fcbbdddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
    fcddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
    ccddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
    ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
    dddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
    dddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
    dddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
    dddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
    dddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
    dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
    ddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
    ddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
    ddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
    dddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
    dddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
    dddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
    ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
    ddddddddddddddddbb1b11cccccccccccccccccccccccccccccccccccccccccccccbbb111111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
    ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
    ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
    ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
    ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
    dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
    dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
    ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
    dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
    dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
    bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
    bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
    bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
    bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
    bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
    bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
    ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
    dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
    ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
    ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
    dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
    ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
    bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
    dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
    dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
    ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
    dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
    bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
    ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
    dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
    dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
    bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
    dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
    dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
    bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
    cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
    ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
    ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
    ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
    cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
    cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
    cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
    ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
    cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
    ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
    cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
    cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
    ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
    cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
    fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
    fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
    fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
    ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
    fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
    `)
title = textsprite.create("Longlinh's SJSM")
title2 = textsprite.create("ENDLESS MODE RECREATION")
title.setIcon(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `)
title.setPosition(54, 10)
title2.setPosition(78, 21)
title.setOutline(1, 10)
title2.setOutline(1, 2)
let tile_menu = miniMenu.createMenu(
miniMenu.createMenuItem("Play", img`
    . . . . . . . . . . . . . . . . 
    . f f f . . . . . . . . . . . . 
    . f 4 4 f f . . . . . . . . . . 
    . f 5 5 4 4 f f . . . . . . . . 
    . f 5 5 5 5 4 4 f f . . . . . . 
    . f 5 5 5 5 5 5 4 4 f f . . . . 
    . f 5 5 5 5 5 5 5 5 4 4 f f . . 
    . f 5 5 5 5 5 5 5 5 5 5 4 4 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 f f . . 
    . f 5 5 5 5 5 5 5 5 f f . . . . 
    . f 5 5 5 5 5 5 f f . . . . . . 
    . f 5 5 5 5 f f . . . . . . . . 
    . f 5 5 f f . . . . . . . . . . 
    . f f f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `),
miniMenu.createMenuItem("Settings", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f . f f f f f . . 
    . . f f 3 3 3 f f f 3 3 3 f f . 
    . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
    . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
    . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
    . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
    . . f f 3 3 3 b b b 3 3 3 f f . 
    . . . f f 3 b b b b b 3 f f . . 
    . . . . f f b b b b b f f . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `),
miniMenu.createMenuItem("Extra", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
)
tile_menu.setPosition(32, 80)
miniMenu.setFrame(tile_menu, img`
    ..99999999999999999999..
    .9966666666666666666699.
    996661111111111111166699
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    996661111111111111166699
    .9966666666666666666699.
    ..99999999999999999999..
    `)
miniMenu.onButtonPressed(tile_menu, miniMenu.Button.A, function (selection, selectedIndex) {
    if (selectedIndex == 0) {
        save_file()
    } else if (selectedIndex == 1) {
        settings_menu_()
    } else {
        extra_menu2()
    }
    miniMenu.close(tile_menu)
})
init_rooms()
game.onUpdate(function () {
    if (hanged_chase) {
        if (hanged_difference <= 75) {
            monster4.follow(mySprite, 0)
            hanged_observed += -1
        } else if (hanged_difference > 75) {
            monster4.follow(mySprite, 250)
            hanged_difference = 150
        }
        if (hanged_observed <= 0) {
            hanged_observed = 250
            spriteutils.placeAngleFrom(
            monster4,
            randint(0, 359),
            randint(130, 160),
            mySprite
            )
        }
    }
})
game.onUpdate(function () {
    if (old_man_stamina <= 100 && old_man_stamina > 0) {
        old_man_stamina += -1
    } else if (old_man_stamina <= 0) {
    	
    }
})
game.onUpdate(function () {
    if (siren_chase) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile47`)) {
            player_on_crate = true
        } else {
            player_on_crate = false
        }
    }
})
game.onUpdate(function () {
    if (lisa_chase) {
        unknownspecimen5.setFlag(SpriteFlag.GhostThroughWalls, true)
        dxlisa = unknownspecimen5.x - mySprite.x
        dylisa = unknownspecimen5.y - mySprite.y
        angle_to_lisa = 0
        lisa_difference = Math.abs(spriteutils.radiansToDegrees(Math.atan2(dylisa, dxlisa)) - looking_direction)
        if (lisa_appear) {
            if (lisa_difference <= 75) {
                unknownspecimen5.follow(mySprite, 0)
                lisa_observed += -1
                animation.runImageAnimation(
                unknownspecimen5,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . f f f 5 5 5 5 f . . . . . 
                    . f f f f f 5 5 5 5 f . . . . . 
                    f f f . . f 5 5 5 5 f . . . . . 
                    f . . . . f 5 5 5 5 f . . . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f f f f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f f . . . . 
                    . . . . f f f 5 5 5 5 f . . . . 
                    . . f f f f f 5 5 5 5 f . . . . 
                    . f f f . . f 5 5 5 5 f . . . . 
                    . f . . . . f 5 5 5 5 f . . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f f f f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . f f f 5 5 5 5 f . . . . . 
                    . f f f f f 5 5 5 5 f . . . . . 
                    f f f . . f 5 5 5 5 f . . . . . 
                    f . . . . f 5 5 5 5 f . . . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f f f f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f . . . . . . 
                    . . f f f 5 5 5 5 f . . . . . . 
                    f f f f f 5 5 5 5 f . . . . . . 
                    f f . . f 5 5 5 5 f . . . . . . 
                    . . . . f 5 5 5 5 f . . . . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f d f b b b b f d f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f d d d d f . . . . . 
                    . . . . . f f f f f f . . . . . 
                    `],
                50,
                true
                )
            } else {
                unknownspecimen5.follow(mySprite, 210)
                lisa_observed = 70
            }
            if (lisa_observed <= 0) {
                lisa_observed = 0
                animation.runImageAnimation(
                unknownspecimen5,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                50,
                true
                )
            }
        }
    }
})
game.onUpdate(function () {
    if (bekka_chase) {
        if (bekka_appear) {
            if (spriteutils.distanceBetween(mySprite, monster6) <= 50) {
                bekka_appear = false
                monster6.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . f f f 1 1 1 1 f . . . . . 
                    . f f f . f 1 1 1 1 f . . . . . 
                    f f . . . f 1 1 1 1 f . . . . . 
                    . . . . . f 1 1 1 1 f . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . f f . f f f f . f f . . . 
                    . . f f . . f f 2 2 . . f f . . 
                    . f f . . . 2 2 f f . . . f f . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . f f f f f 2 2 2 2 f . . . 
                    . . f f 2 2 2 2 f f f f f f . . 
                    . . . . . f f f f f f . . . . . 
                    `)
                monster6.follow(mySprite, 72)
                timer.after(randint(500, 800), function () {
                    monster6.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                })
            }
        }
    }
})
game.onUpdate(function () {
    if (game_active) {
        if (health_player.value <= 0) {
            health_player.value += -10000
            if (game_save_file == 1) {
                blockSettings.writeNumber("save1", 0)
            } else if (game_save_file == 2) {
                blockSettings.writeNumber("save2", 0)
            } else {
                blockSettings.writeNumber("save3", 0)
            }
            if (blockSettings.readNumber("hiscore") <= info.score()) {
                blockSettings.writeNumber("hiscore", info.score())
            }
            controller.moveSprite(mySprite, 0, 0)
            pause(1100)
            death_message()
            game.gameOver(false)
        }
        if (health_player.value <= 99 && !(health_player.value <= 0)) {
            if (spooper_spores == false) {
                health_player.value += 0.06
            }
        } else {
            controller.moveSprite(mySprite, 0, 0)
        }
    }
})
game.onUpdate(function () {
    if (game_active) {
        if (!(health_player.value <= 0)) {
            if (stamina_use) {
                stamina_bar.value += -1
                if (gooped) {
                    controller.moveSprite(mySprite, 60, 60)
                } else {
                    controller.moveSprite(mySprite, 180, 180)
                }
            } else {
                stamina_bar.value += 0.8
                if (gooped) {
                    controller.moveSprite(mySprite, 20, 20)
                } else {
                    controller.moveSprite(mySprite, 100, 100)
                }
            }
            if (stamina_bar.value <= 0) {
                stamina_bar.value = -1
                stamina_use = false
                if (gooped) {
                    controller.moveSprite(mySprite, 20, 20)
                } else {
                    controller.moveSprite(mySprite, 100, 100)
                }
            }
        }
    }
})
game.onUpdate(function () {
    if (ben_chase) {
        dx = specimen_6.x - mySprite.x
        dy = specimen_6.y - mySprite.y
        angle_to_enemy = Math.atan2(dy, dx)
        difference = Math.abs(spriteutils.radiansToDegrees(angle_to_enemy) - looking_direction)
        if (difference > 180) {
            difference = 360 - difference
        }
        if (difference <= 75) {
            ben_visible = true
            tiles.placeOnTile(specimen_6, specimen_6.tilemapLocation())
            scene.followPath(specimen_6, scene.aStar(specimen_6.tilemapLocation(), specimen_6.tilemapLocation()), 0)
        } else {
            ben_visible = false
        }
    }
})
game.onUpdate(function () {
    if (game_active) {
        if (controller.up.isPressed()) {
            yF = -1
        } else if (controller.down.isPressed()) {
            yF = 1
        } else {
            yF = 0
        }
        if (controller.left.isPressed()) {
            xF = -1
        } else if (controller.right.isPressed()) {
            xF = 1
        } else {
            xF = 0
        }
    }
})
game.onUpdate(function () {
    if (hanged_chase) {
        monster4.setFlag(SpriteFlag.GhostThroughWalls, true)
        dxhanged = monster4.x - mySprite.x
        dyhanged = monster4.y - mySprite.y
        hanged_difference = Math.abs(spriteutils.radiansToDegrees(Math.atan2(dyhanged, dxhanged)) - looking_direction)
    }
})
game.onUpdate(function () {
    if (hooked_chase) {
        hooked_doll.setFlag(SpriteFlag.GhostThroughWalls, true)
        dxhooked = hooked_doll.x - mySprite.x
        dyhooked = hooked_doll.y - mySprite.y
        hooked_difference = Math.abs(spriteutils.radiansToDegrees(spriteutils.angleFrom(mySprite, hooked_doll)) - looking_direction)
        if (hooked_chase) {
            if (hooked_difference <= 45) {
                hooked_doll.follow(mySprite, 140)
            } else if (hooked_difference <= 75) {
                hooked_doll.follow(mySprite, 40)
            } else if (hooked_difference > 75) {
                hooked_doll.follow(mySprite, 0)
            }
        }
    }
})
game.onUpdate(function () {
    if (parasite_form_until_hit) {
        if (spriteutils.distanceBetween(mySprite, specimen10) >= 85) {
            parasite_form = 2
        } else if (spriteutils.distanceBetween(mySprite, specimen10) < 85 && spriteutils.distanceBetween(mySprite, specimen10) > 35) {
            parasite_form = 1
        } else {
            parasite_form = 0
        }
        if (parasite_form == 0) {
            specimen10.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f 3 f 5 5 5 . . . . . 
                . . . . . 3 5 5 5 5 5 . . . . . 
                . . . . . 5 5 5 5 5 f . . . . . 
                . . . . . f 4 4 2 2 b . . . . . 
                . f f f . f 4 2 2 5 3 . f f 2 . 
                . 5 5 5 f 5 f 1 1 f f f 2 2 2 . 
                . 5 4 4 4 5 f f f 1 a 4 4 5 f . 
                . f 4 5 2 2 1 f f a 2 2 4 3 4 f 
                . f 2 2 2 3 f f f a f 5 5 3 3 f 
                . f 2 4 5 1 a 1 f f 2 2 2 2 5 f 
                . 4 3 3 2 5 f f f f 2 5 5 2 5 5 
                . f 3 2 f 5 f 1 1 3 3 5 5 5 f f 
                . 2 f f f b 4 f 5 3 f . f f f . 
                . . . . . 5 3 3 2 5 5 . . . . . 
                . . . . . 3 2 2 5 5 f . . . . . 
                `)
        } else if (parasite_form == 1) {
            specimen10.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f 3 f 5 5 5 . . . . . 
                . . . . . 3 5 5 5 5 5 . . . . . 
                . . . . . 5 5 5 5 5 f . . . . . 
                . . . . . f 4 4 2 2 b . . . . . 
                . . . . . f 4 2 2 5 3 . . . . . 
                . . . f f 5 5 5 3 3 f 5 f . . . 
                . . . 5 5 5 4 4 2 4 5 5 5 . . . 
                . . . b 4 2 2 2 5 5 5 5 f . . . 
                . . . 5 3 3 3 5 5 4 f 5 2 . . . 
                . . . 3 3 5 4 4 4 5 2 2 2 . . . 
                . . . f 4 5 5 5 5 2 2 3 3 . . . 
                . . . f 5 5 f f f 3 3 3 f . . . 
                . . . . . b 4 3 5 3 f . . . . . 
                . . . . . 5 3 3 2 5 5 . . . . . 
                . . . . . 3 2 2 5 5 f . . . . . 
                `)
        } else {
            parasite_form_until_hit = false
            specimen10.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 5 f f 5 3 f . . . . . 
                . . . . . f 4 1 5 5 3 . . . . . 
                . . . . . 5 2 4 f 2 f . . . . . 
                . . . . . 5 2 2 1 2 5 . . . . . 
                . . . . . f 1 2 5 2 2 . . . . . 
                . . . . . f 3 b f 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
})
game.onUpdate(function () {
    if (hooked_cooldown) {
    	
    }
})
game.onUpdate(function () {
    if (old_man_check) {
        if (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile13`))) {
            old_man_found = true
        }
    }
})
game.onUpdateInterval(50, function () {
    if (game_active) {
        if (!(mySprite.overlapsWith(goop_puddle))) {
            gooped = false
        }
    }
})
game.onUpdateInterval(250, function () {
    if (bab_chase) {
        scene.followPath(specimen_5, scene.aStar(specimen_5.tilemapLocation(), mySprite.tilemapLocation()), 75)
        color.RotatePalette.startScreenEffect(250)
        if (Math.percentChance(50)) {
            scene.setBackgroundImage(img`
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
                9999999999999999999999999999999999999999dd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999dcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
                999999999999999999999999999999999999999ddcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999669999
                999999999999999999999999999999999999999dbcbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999996999699996
                999999999999999999999999666999999999999dcccc99999999999699999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999996999
                99999999999999999999999996699999999999dbccccb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
                99999999999999999999999996699699999999dbbccbb9999999699999999999999999999999999999999999999999999999999999999999999999969999999999999999969999999999999969999966
                9999999999999999966999996699999999999ddcbcccbb999996999999999999999996999999999999999999999999999999999999999999999999999999699999999999999999999999699999999969
                9999999999999999969999999999999999999dbcccccbb999999999999999999999999999699969999999999999999999999999999999999999999999999999999999999999999999669699969999966
                699969999999999999999999999999666699cdccbcbcccc699999ddddd9969999dbbb9999999699999999999969999999999999999999999999999999999999999999999999696999999969999999996
                999999999999999999999999999999666696dcbbbcbbbccb99999dbbdb99dd999ddbb9999999999999999999999996999999999999999999999999999969669999999999999999699999969999999999
                696999999999999999969999999699999996dccccccccccb99969dcccb9ddcc9ddccb6696999999699999999969999999996999999999999999999999666669999999999999999966669696999699999
                69999699999999999999999999999999669dccccbbbbccccb6966dbcbb9dccc9dbcbb6699999999999999999999999999999999999999999966669966699669999999699999696969996669666669996
                6999999999999999999969969999999966bdbbbbbbbbbbbbbb966dbccb9dbbb6dbbcc6699999999966999999999999999999996999999669966699669996969999999999996666999996699966666666
                9999999999999999999999999999999999dbbcccccccccbbbb666dcccbbdccbbccccc6669669669966999966669999999699996999999999966996969996969996999996666666669666666666666666
                9999999999999999999699999999999999bcccccccccccccbb6666bcbbcccbbccbcbb6666669999666666996969996669999699999999999999999996999699969966699999999666666666666666666
                999999996699999699999669999999999999cccccccccccc666666bccbcccccccccbb66966666996666669669969966969996999999999999999999999996999669ff6999996996666666666666666ff
                999999999969999669966699999999999999ccbbbbbbcccc666666cccbbbbbbcccccc66966999996996669999999999999966996969999999966669999996696999f969966666666666666666666ffff
                999999999999669996966996699999999999bbcbbccbbbbb6666666bbbcbbbccbbbb66666666996669966666999669999966699666999999966966999699669966ff96666669666666666666666fffff
                999996699696669996999999969999999999bbcbbbbbbbbb66666666bccccccccbb666666666666966966966666669666966696699666999669669666996666666f6666666666666666666666fffffff
                666996666666699966999999999699999999bbbbcccbbbbb66666666dccccccccc6666666666666666666666666666666666666666666666669666666666666666f666666666666666666666ffffffff
                666666666666999666696699999966999999bccccccccccb66666666dccbbbbbcc6666666666666666666666666666666666696666666666666666666666666666f66666666666666666666fffffffff
                6666666666666666666669699969999999999cccccccccc966666666dcbbbccbbc6666666666666666666666666666666666666666666666666666666666666666f666666ff66666666666ffffffffff
                66666666666666666666b9699999969999b696bcccccccb6f6666666ccbbbbcccc666666666666ff6666666666666666666666666666666666666666666666ff66ff66666ff666666666ffffffffffff
                666666666666666666dddbbb9dddd699ddb9bb9ccbbbbbfbbddddb666bbccbbbbcbb66666666666f66666666666666666666666666666666666666666666666ff66f666666f66666666fffffffffffff
                666666666666666666dbbbbfdbbdbbbbbbbb64bccbbbbccdddbbbbbbbcbbbbbbbcc66bbbbbb6666f69666666666666666666666666666666666666666666666fff6ff66666f6f6666fffffffffffffff
                b6666666b6b6b66666dbbbbfbbbbbbb6bbbb64bbbbbbbccbbcbbcbbcccbbbccbbccbb6b44466666f66666666666666666666666666666f6666666666666666666f66ff6666fff66fffffffffffffffff
                b6666666b6b6bb66b6dccccbfcccccbbcccb444bbcbccbcbbbbbcbbbccbbbccbbc4bb66bbb444b6666666666666666666666666666666ff6666666666666666666f66f6666ff66ffffffffffffffffff
                bb6b66bb64bb64bb66dbbbbbbbbbbbbbbcbb444bccbbbccbbcccbbbbccbbbbbbbc44464444bb4b6f66bf6666666666666666666666666ff6666666666666666666ffff6666f66fffffffffffffffffff
                444466bb44464446b6bccbbbbcbcccbbccbc444bbbbbbcccccccccbbbcbbbbcccc444444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666fff666bffffffffffffffffffffff
                44b6b4b4b4b6b4444b4bcccccccccccccccc44bcbbbbbcccc4b4cccbbbbcbbcccc4444446644444fbb6f6bbb666666666666666666666f66ff66666666666666666fff6bbfffffffffffffffffffffff
                444444b4444444444464cbbbbbbcbbbbbbcb444ccbbbbccc44f44ecbbcbbbbbbcc444444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff646fffffffffffffffffffffff
                4444446444444444446bccbccbbccbbbccc4ff4ccbccbcc444ff44ccbcbbbbbbcc4444444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff44ffffffffffffffffffffffff
                4444b66b4444446664644ccbbbbbbbbccc4ff46ccbbbbcc444444bdbbccbbcbbccff44464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4fffffffffffffffffffffffff
                4444466b44444466644444cccccccccccddddbbccbbbbcc44444dfdbbccbbcbbccffff464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
                4444446644444444464464cccccccccccddbbbbccbbbbcc44bb4dfdbbccbbbbbcc44f4664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
                4444444444444f44444466ddbbbbbbbbcbbccccccbbbbbcd44ddffdbbccbbbbbcc44444dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
                4444464444444f444d4444dbbbccbbbbcbcccccccccbbccd3ddd4ffbbccccccbccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
                4444464444444ff44ff4b4dccbccbbcccbcc44ccbbbbbbccdccccccccccbcbbbccddddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
                4444446444444ffddfd344dbcbbbbbcbbbcc4cccbbccbbcbbcccccccccbbbcbcccdd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
                44444444444444f3bf44ffdbbbbbcbbbbbbccbbbcbccbbcbbbbcbbbcbbccccccccdddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
                44444444ddd444ff4f33ffcbbbbbccbbccbccbbbcbbbbbcbbcccbccccbccbbbbccdddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
                44444444dddddddfdf44f4bbccbbbbbbccbbbbbbbbbbbbbbbbccbbbcbbbbbbcbccd4ddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
                44444444ddddddd4ff4ff4bbbbbbbcccbbbbbbbbccbbcccbbbbbbbbbcccbbccbccdd4dddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
                6444444ddd3dd44dff6ff4bbbcbbcccccbbcccbbccbbccbbbcccbbbcccccbccbccddfdddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
                4344ddddddddd4ddff4fddcbbcbbccbccbbbcbbbbbbbbbbbbcccbccccbccbbbbccdfffddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
                4444ddddb4ddddddfddfd4ccbcbbcccccbbbbbbbbbbbcccbbbbbbcccccccbccbccdffdddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
                4444deedebd4434efffdd4ccbbbbcccccbbbcccccbccccccbbbbbbbcccccbbbcccdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
                4444befeebe4d4beff4444ccbcbbcccccbbccbbbbcccbcbccbbbbbbcccccbbccccddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
                444eeeefeeeed4e4ff4444ccccbbcccccbbbbbbbccbcbcbcccbccbbcccccbcbbcc44dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
                fffeeffffeeeeeffffeffeccbbbbcccccbbbccbcccbcbcbccccccbbcccccbccbccdddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
                effeffedeeffffffffffffccbccbcccccbbbbbbcccbcbcbcbccbcbbbccccbccbccdddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
                beffffedffffffffffffffccbccbbbbbbcccbbccbcbcbcbcbccbbbcbbbbbbbbbbcdddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
                dfffffffffffffffffffffccbbbbbbbbbccbbbccbcbcbcbcbccbbbccccbbbbbbccdddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
                ffffffffffffffffffffffccbbbbbccbbbbbbbccbcbcbcbcbccbbbbbccbbcbbcccffdffdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
                efffffffffffffffffffffccbcbbcccbbbbbbcccbcbcbcbcbcccbbbbbbbbccbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
                ffffffffffffffffffffffccbccbccbbbbbcbcccbcbcbcbcbcccbbbbbcccbccbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
                ffffffffffffffffffffffccccbbbbbbbbccccccbcbcbcbcbcccbccbbbccbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
                ffffffffffffffffffffffccccbbbbbcbbcbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
                fffffffffffffffffffffcccccbbbbbcccbbbcccbcbcbcbcbcccbbbbcccbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccccbbbbccccbcccc
                ffffffffffffffffffffffccccbbccbbccbbbcccbcbcbcbcbcccbccbcccbbcccbcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
                fffffffffffffffffffffbccbbccbbbbbbbbbcccbcbcbcbcbccccccbbbbbbbbbbcccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccbbbbbccccbbccbbbcc
                fffffffffffffffffffffbcbbbcbbbbbbbbbbcccbcbcbcbcbcccbcbbbbbbbbbbbccccccbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccccbbbbbbccbbccbbccc
                ffffffffffffffffffffccbbbbbccbcbbbccbcccbcbcbcbcbccccccbbbcccbbbbcccccbbbcfcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
                fffffffffcfffffffffccccccbbccbccbcccbcccbcbcbcbcbcccbcbbbcccbbbbbcccccccbbcccccbcfffcccffffffffffffffffffffffffffffffffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
                ddcccffffffffffffcccccbcccbbcbbbbbbbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccccccbbcccccccccccbbcfcffffffffffffffffffffffffffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
                bdddfcbffffffffcccccccbbbcccbbbbbbccbcccbcbcbcbcbcccbbbbbbbbbbbccccccccccbcbbcccccccbbbfcbfcffffffffffffffffffffffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
                bbbddbbcffffccccccccccbbcbbcccbbbccbbcccbcbcbcbcbcccbbcbbbbbbbbccccccccccccccccccccccccccbbbbcffffffffffffffffffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
                bbbbdbbbbcccccccbccbcccccbbbbbbbbcbcccccbcbcbcbcbcccbbcbbbbbbccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
                bbbbccccccccccbbbccccccccccccccccccccbbbbbbbbbbbbcccbbcbbbcccccccccbcccccccccccccccccccccccbbcbccbccccfffffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
                bbbbbbbbccccccbbcccccbcccccccccccccbbcccccccccccbccccbbcbbccccccccccccccbcbcccccccccccccbbbbbbbccccbbbbbfccccccffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
                bbbccccccbcccccccccbbbbbcccccccccccbbccccccccccccccccccccccccccccccccccccbcccccccccccccbccbbbbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
                bbccccccbbbbbcccccbbccbbbcccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
                ccbddddbbbbbbbcccccbcccccccbccbcbcccccccccccccccbcccccccccbbcccccccccbccccccccccccccccccccbbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
                ddbbbbccbbbbbbbbbbcccbbcccccccccbcccccccccccccccbcccccccccbccccccccccccccccccccccccccccccccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
                cbbbbbbbbbbbbbbbbbbcccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbccccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
                cbbbccccccccccccbbbbbcbcccccbbccccccccccccbbbbbccccccccccccccccccccccccccccccbbcccbccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
                bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccccccbbbcccccbcccccccccccccbbccccccccccccccccccccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbccccccccccccbbccccccccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
                bbbbbbcccccccbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbcccccccccbbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
                bbbccbbbccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccbccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
                bbbcdddddbbbbcccccccccccccbbbbbccccbbcbccccccccccccbcccccccccccccccccccccbcbbbbbbbcccccccccccccccccbbbbbbcccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
                bbbdcbbbbbbbbbbbbbbbbccccbbccccccccccccccccccccccccccccccbbbbbbcccbcccccccccccccbcccccccccccccccccbbbbbbbbcbbbbbbbbcccccccbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
                bdbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccccccbbbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
                cddbccccbbbbbbbbbbbbbbcccccccccccccbbbbbccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                cdcccbcccbbbbbbbbbbbbbbcccccccbbbbbbcccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                dcbbbbbbbbbbbbbbbbbbccccccbbbbbcccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                dbbbbbbbbbbbccccccccccccccbbbbcccccccbbccccccccccbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbcccbbcbbbbbbbbccccccbbccccbbccccccccccccccccccccccccccccccccccbbcccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccccccccccccccccccccccccc
                bbbbbbbccbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccbbbccccccccccccccc
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccbbbbbbbbbbbbb
                bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
                ccccccccccccbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbcbbbbbbbbbcccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
                cccccccccccccccccccccbdddddccccccccccbbbbbbbbbccccccccbbbcccccccccbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccc
                cccccccccbbbbbcccccccccccccccccccccbbbbbbbcccccccbbcccccccccccbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccccc
                ccccccccccccbbccccccccccccbbbbbbbbbbbbbccccccbbbbbccccccbbbbbbbbbcbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
                bcccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbcccccccbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
                bccccccccccccccccbbbbbbbbbbbbbbbbeccccbbdbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccbbcccccccccccccbbbbb
                cccccccccccbbbbbbbbbbbbbbbbbbbbbbeeccbbd4bddbbdbbb3b444ddd444bbb344bbddbbcb44bbb44bb3444b444444b4be44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
                bddddcbbbbbbbb444b4bbb44bb4b4bb4444dd44d44ddb4d3bddddddddd444ddddd44ddddddb33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
                ddbbdd44b44b444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
                bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
                dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
                d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
                ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
                4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
                dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
                `)
        } else {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
                ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
                fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
                fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
                fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
                ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
                f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
                ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
                ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
                fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
                fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
                ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
                fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
                fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
                ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
                ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
                fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
                ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
                bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
                bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
                bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
                bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
                3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
                333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
                cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
                cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
                cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
                cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
                bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
                bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
                dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
                dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
                dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
                ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
                ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
                ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
                ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
                d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
                333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
                33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
                33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
                d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
                ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
                b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
                bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
                bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
                b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
                dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
                dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
                dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
                dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
                3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
                33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                `)
        }
    }
})
game.onUpdateInterval(7000, function () {
    if (demon_chase) {
        door_invisible = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        door_invisible.setImage(img`
            d f d d d d d d d f d d d d d d 
            d f d d d d d d d f d d d d d d 
            d f d d d d d d d f d d d d d d 
            f f f f f f f f f f f f f f f f 
            d d d d d f d d d d d d d f d d 
            d d d d d f d d d d d d d f d d 
            d d d d d f d d d d d d d f d d 
            f f f f f f f f f f f f f f f f 
            d f d d d d d d d f d d d d d d 
            d f d d d d d d d f d d d d d d 
            d f d d d d d d d f d d d d d d 
            f f f f f f f f f f f f f f f f 
            d d d d d f d d d d d d d f d d 
            d d d d d f d d d d d d d f d d 
            d d d d d f d d d d d d d f d d 
            f f f f f f f f f f f f f f f f 
            `)
        tiles.placeOnRandomTile(door_invisible, assets.tile`myTile1`)
        timer.after(randint(5500, 6500), function () {
            door_invisible = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(door_invisible, assets.tile`myTile1`)
            door_invisible.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        })
    }
})
game.onUpdateInterval(260, function () {
    if (goop_chase) {
        scene.followPath(specimen2, scene.aStar(specimen2.tilemapLocation(), mySprite.tilemapLocation()), 100)
    }
})
game.onUpdateInterval(350, function () {
    if (game_active) {
        if (old_man_stamina > 0) {
            scene.followPath(specimen12, scene.aStar(specimen12.tilemapLocation(), mySprite.tilemapLocation()), 60)
        }
    }
})
game.onUpdateInterval(5700, function () {
    if (face_cooldown == false && face_chase) {
        spriteutils.placeAngleFrom(
        unknownspecimen1,
        randint(0, 360),
        randint(120, 140),
        mySprite
        )
        face_speed = 0
    }
})
game.onUpdateInterval(1000, function () {
    if (spooper_spores) {
        health_player.value += -0.25
    }
})
game.onUpdateInterval(1000, function () {
    if (game_active) {
        if (mySprite.vx == 0 && mySprite.vy == 0) {
            idle_timer += -1
        }
        if (idle_timer == 0) {
            taker()
        }
    }
})
game.onUpdateInterval(400, function () {
    if (cow_chase) {
        scene.followPath(monster5, scene.aStar(monster5.tilemapLocation(), mySprite.tilemapLocation()), 115)
    }
})
game.onUpdateInterval(400, function () {
    if (parasite_chase) {
        if (parasite_form == 0) {
            scene.followPath(specimen10, scene.aStar(specimen10.tilemapLocation(), mySprite.tilemapLocation()), 50)
        } else if (parasite_form == 1) {
            scene.followPath(specimen10, scene.aStar(specimen10.tilemapLocation(), mySprite.tilemapLocation()), 60)
        }
    }
})
forever(function () {
    allRoomsBelowThreshold()
    song_pull(chase_picking_yippee)
})
forever(function () {
    if (game_active) {
        if (!(controller.B.isPressed())) {
            if (xF == 0 && yF == 0) {
                angle = Math.atan2(lastYF, lastXF) * (180 / Math.PI)
                multilights.flashlightSourceAttachedTo(mySprite).direction = angle
                looking_direction = angle
            } else {
                lastYF = yF
                lastXF = xF
                angle2 = Math.atan2(yF, xF) * (180 / Math.PI)
                multilights.flashlightSourceAttachedTo(mySprite).direction = angle2
                looking_direction = angle2
            }
        } else {
            // B is pressed
            if (xF == 0 && yF == 0) {
                angle3 = 180 + Math.atan2(lastYF, lastXF) * (180 / Math.PI)
                // NORMALIZE HERE
                angle3 = (angle3 % 360 + 360) % 360
                multilights.flashlightSourceAttachedTo(mySprite).direction = angle3
                looking_direction = angle3
            } else {
                lastYF = yF
                lastXF = xF
                angle4 = 180 + Math.atan2(yF, xF) * (180 / Math.PI)
                // NORMALIZE HERE
                angle4 = (angle4 % 360 + 360) % 360
                multilights.flashlightSourceAttachedTo(mySprite).direction = angle4
                looking_direction = angle4
            }
        }
    }
})
game.onUpdateInterval(900, function () {
    if (face_chase) {
        if (face_speed < 6) {
            face_speed += 1
            unknownspecimen1.follow(mySprite, face_speed * 20)
        } else if (face_speed == 6) {
            face_speed = 6
            unknownspecimen1.follow(mySprite, face_speed * 20)
        }
    }
})
game.onUpdateInterval(380, function () {
    if (otto_chase) {
        scene.followPath(unknownspecimen2, scene.aStar(unknownspecimen2.tilemapLocation(), mySprite.tilemapLocation()), 70)
    }
})
game.onUpdateInterval(500, function () {
    if (body_chase) {
        scene.followPath(monster2, scene.aStar(monster2.tilemapLocation(), mySprite.tilemapLocation()), 140)
    }
})
game.onUpdateInterval(500, function () {
    if (charles_chase) {
        if (charles_appear) {
            scene.followPath(woormy_charles_doll, scene.aStar(woormy_charles_doll.tilemapLocation(), mySprite.tilemapLocation()), 200)
        }
    }
})
game.onUpdateInterval(100, function () {
    if (ben_chase) {
        if (ben_visible) {
            tiles.placeOnTile(specimen_6, specimen_6.tilemapLocation())
            scene.followPath(specimen_6, scene.aStar(specimen_6.tilemapLocation(), specimen_6.tilemapLocation()), 0)
        } else {
            scene.followPath(specimen_6, scene.aStar(specimen_6.tilemapLocation(), mySprite.tilemapLocation()), 200)
        }
    }
})
game.onUpdateInterval(100, function () {
    if (parasite_chase) {
        if (parasite_form == 2) {
            scene.followPath(specimen10, scene.aStar(specimen10.tilemapLocation(), mySprite.tilemapLocation()), 200)
        }
    }
})
game.onUpdateInterval(100, function () {
    if (old_man_found) {
        specimen12.sayText("")
        scene.followPath(specimen12, scene.aStar(specimen12.tilemapLocation(), mySprite.tilemapLocation()), 200)
    }
})
game.onUpdateInterval(100, function () {
    if (game_active) {
        if (old_man_stamina <= 0) {
            scene.followPath(specimen12, scene.aStar(specimen12.tilemapLocation(), mySprite.tilemapLocation()), 200)
            old_man_stamina = 3
        }
    }
})
game.onUpdateInterval(300, function () {
    if (bug_chase) {
        scene.followPath(specimen_3, scene.aStar(specimen_3.tilemapLocation(), mySprite.tilemapLocation()), 140)
    }
})
game.onUpdateInterval(4500, function () {
    if (old_man_check) {
        old_man_lines = [
        "Are you in here...?",
        "Come out, come out!",
        "I can smell you.",
        "I hear you.",
        "I'm so lonely...",
        "Where... are you?",
        "You'll like being dead. I promise.",
        "You're wasting both our time."
        ]
        specimen12.sayText(old_man_lines._pickRandom())
    }
})
