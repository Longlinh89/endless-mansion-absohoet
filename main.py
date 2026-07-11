@namespace
class SpriteKind:
    Specimen_1 = SpriteKind.create()
    Specimen_2 = SpriteKind.create()
    Goop = SpriteKind.create()
    Axe = SpriteKind.create()
    Specimen_3 = SpriteKind.create()
    Specimen_4 = SpriteKind.create()
    Specimen_5 = SpriteKind.create()
    Specimen_6 = SpriteKind.create()
    Specimen_7 = SpriteKind.create()
    Specimen_8 = SpriteKind.create()
    Specimen_9 = SpriteKind.create()
    Specimen_10 = SpriteKind.create()
    Specimen_11 = SpriteKind.create()
    Specimen_12 = SpriteKind.create()
    Man_Wander = SpriteKind.create()
    Specimen_13 = SpriteKind.create()
    Unknown_specimen_1 = SpriteKind.create()
    Unknown_specimen_2 = SpriteKind.create()
    Unknown_specimen_3 = SpriteKind.create()
    Unknown_specimen_4 = SpriteKind.create()
    Shadow_Animal = SpriteKind.create()
    Unknown_specimen_5 = SpriteKind.create()
    Monster_2 = SpriteKind.create()
    Monster_3 = SpriteKind.create()
    Monster_4 = SpriteKind.create()
    Monster_5 = SpriteKind.create()
    Monster_6 = SpriteKind.create()
    Husks = SpriteKind.create()
    Woormy_Charles = SpriteKind.create()
    Monster_1 = SpriteKind.create()
    Hooked_doll = SpriteKind.create()
def ben():
    global ben_cooldown, specimen_6
    ben_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_6)
    specimen_6 = sprites.create(img("""
        .
        """), SpriteKind.Specimen_6)
    if ben_chase:
        
        def on_after():
            tiles.place_on_random_tile(specimen_6, assets.tile("""
                myTile2
                """))
            specimen_6.set_image(img("""
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
                """))
        timer.after(750, on_after)
        

def on_on_overlap(sprite, otherSprite):
    global demon_cooldown, kill_credit
    if demon_cooldown:
        health_player.value += -45
        demon_cooldown = False
        
        def on_after2():
            global demon_cooldown
            demon_cooldown = True
        timer.after(3000, on_after2)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "demon"
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_11, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    global guard_cooldown, kill_credit
    if guard_cooldown:
        health_player.value += -45
        guard_cooldown = False
        
        def on_after3():
            global demon_cooldown
            demon_cooldown = True
        timer.after(1000, on_after3)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "guard"
sprites.on_overlap(SpriteKind.player, SpriteKind.Monster_1, on_on_overlap2)

def taker():
    global TOTAKETHEDEAD
    TOTAKETHEDEAD = sprites.create(img("""
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
            """),
        SpriteKind.Specimen_9)
    TOTAKETHEDEAD.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
    TOTAKETHEDEAD.set_scale(2, ScaleAnchor.MIDDLE)
    TOTAKETHEDEAD.set_position(randint(400, 900), randint(400, 900))
    TOTAKETHEDEAD.follow(mySprite, 20000)
def security_guard():
    global guard_cooldown, monster1
    guard_chase = 0
    guard_cooldown = False
    sprites.destroy_all_sprites_of_kind(SpriteKind.Monster_1)
    if guard_chase:
        monster1 = sprites.create(img("""
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
                """),
            SpriteKind.Monster_1)
        tiles.place_on_random_tile(monster1, assets.tile("""
            myTile2
            """))
        monster1.set_position(monster1.x, monster1.y + -32)
        
        def on_after4():
            global guard_cooldown
            guard_cooldown = True
            monster1.follow(mySprite, 120)
        timer.after(1200, on_after4)
        

def on_on_overlap3(sprite3, otherSprite3):
    global cow_cooldown, kill_credit
    if cow_cooldown:
        health_player.value += -30
        cow_cooldown = False
        
        def on_after5():
            global cow_cooldown
            cow_cooldown = True
        timer.after(3000, on_after5)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "cow"
sprites.on_overlap(SpriteKind.player, SpriteKind.Monster_5, on_on_overlap3)

def hooked_doll2():
    global hooked_cooldown, hooked_doll
    sprites.destroy_all_sprites_of_kind(SpriteKind.Hooked_doll)
    hooked_cooldown = False
    hooked_doll = sprites.create(img("""
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
            """),
        SpriteKind.Hooked_doll)
    if hooked_chase:
        hooked_doll.set_image(img("""
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
            """))
        tiles.place_on_random_tile(hooked_doll, assets.tile("""
            myTile0
            """))
        
        def on_after6():
            global hooked_cooldown
            hooked_cooldown = True
        timer.after(1000, on_after6)
        

def on_on_overlap4(sprite4, otherSprite4):
    global bug_cooldown, kill_credit
    if bug_cooldown:
        health_player.value += -30
        bug_cooldown = False
        
        def on_after7():
            global bug_cooldown
            bug_cooldown = True
        timer.after(1000, on_after7)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "bug"
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_3, on_on_overlap4)

def on_overlap_tile(sprite5, location):
    tiles.set_current_tilemap(tilemap("""
        level4
        """))
    rooms()
    info.change_score_by(1)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
        """),
    on_overlap_tile)

def on_overlap_tile2(sprite6, location2):
    tiles.place_on_random_tile(sprite6, assets.tile("""
        myTile2
        """))
scene.on_overlap_tile(SpriteKind.Specimen_3,
    assets.tile("""
        myTile
        """),
    on_overlap_tile2)

def on_overlap_tile3(sprite7, location3):
    global bedroom_key
    bedroom_key = True
    mySprite.say_text("Bedroom key found!", 5000, False)
    tiles.set_tile_at(location3, assets.tile("""
        myTile7
        """))
    victorian_mansion.remove_at(4)
    victorian_mansion.insert_at(4, tilemap("""
        level29
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile19
        """),
    on_overlap_tile3)

def on_overlap_tile4(sprite8, location4):
    global book_secret
    book_secret = True
    mySprite.say_text("Book found!", 5000, False)
    tiles.set_tile_at(location4, assets.tile("""
        myTile7
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile38
        """),
    on_overlap_tile4)

def on_on_overlap5(sprite9, otherSprite5):
    tiles.set_wall_at(otherSprite5.tilemap_location(), False)
    sprites.destroy(otherSprite5, effects.disintegrate, 100)
sprites.on_overlap(SpriteKind.Axe,
    SpriteKind.Unknown_specimen_3,
    on_on_overlap5)

def deathinsert5():
    death_quotes.insert_at(len(death_quotes),
        """
            Form within form writhes and pulses.
            Skeletal sinews stretch outward from beneath the skin wrapped around it.
            It pulls until the skin's elasticity fails ultimately.
            From these small holes the tendrils of bone finally escape.
            You are finally free of this constricted bag of flesh.
            """)
    death_quotes.insert_at(len(death_quotes),
        """
            A 'wicked nasty' child was thrown into a pit.
            No food, light or water was ever given to it.
            Punishment was dealt, without mercy or hesitation.
            As if justified by faith, or ownership from creation.
            It was no righteous act, it was hellish, demon sent.
            Eventually all will find out, in eternal torment.
            """)

def on_on_overlap6(sprite10, otherSprite6):
    global bab_cooldown, kill_credit
    if bab_cooldown:
        health_player.value += -60
        bab_cooldown = False
        
        def on_after8():
            global bab_cooldown
            bab_cooldown = True
        timer.after(3000, on_after8)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "bab"
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_5, on_on_overlap6)

def on_on_overlap7(sprite11, otherSprite7):
    global kill_credit
    health_player.value += -5
    kill_credit = "wall"
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_7, on_on_overlap7)

def rooms():
    global idle_timer
    idle_timer = 300000
    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_9)
    room_random()
    stamina_bar.value = 100
    tiles.place_on_random_tile(mySprite, assets.tile("""
        myTile2
        """))
    for value in tiles.get_tiles_by_type(assets.tile("""
        myTile
        """)):
        tiles.set_wall_at(value, True)
    for value2 in tiles.get_tiles_by_type(assets.tile("""
        transparency16
        """)):
        tiles.set_tile_at(value2, assets.tile("""
            myTile
            """))
        tiles.set_wall_at(value2, True)
    summon()
def bug():
    global bug_cooldown, specimen_3
    bug_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.food)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_3)
    specimen_3 = sprites.create(img("""
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            """),
        SpriteKind.Specimen_3)
    if bug_chase:
        
        def on_after9():
            global specimen_3, partbug1, partbug2, partbug3
            specimen_3 = sprites.create(img("""
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
                    """),
                SpriteKind.Specimen_3)
            partbug1 = sprites.create(img("""
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
                    """),
                SpriteKind.food)
            partbug2 = sprites.create(img("""
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
                    """),
                SpriteKind.food)
            partbug3 = sprites.create(img("""
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
                    """),
                SpriteKind.food)
            partbug1.follow(specimen_3, 130)
            partbug2.follow(partbug1, 110)
            partbug3.follow(partbug2, 90)
            tiles.place_on_random_tile(specimen_3, assets.tile("""
                myTile2
                """))
            for value3 in sprites.all_of_kind(SpriteKind.food):
                value3.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
                tiles.place_on_random_tile(value3, assets.tile("""
                    myTile2
                    """))
        timer.after(500, on_after9)
        
def deer():
    global deer_cooldown, specimen8, ring_deer
    deer_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_8)
    sprites.destroy_all_sprites_of_kind(SpriteKind.food)
    if deer_chase:
        specimen8 = sprites.create(img("""
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
                """),
            SpriteKind.Specimen_8)
        specimen8.follow(mySprite, 80)
        specimen8.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
        ring_deer = sprites.create(img("""
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
                """),
            SpriteKind.food)
        ring_deer.follow(specimen8, 100)
        ring_deer.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
        
        def on_after10():
            global deer_lines
            specimen8.set_image(img("""
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
                """))
            animation.run_image_animation(ring_deer,
                [img("""
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
                        """),
                    img("""
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
                        """),
                    img("""
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
                        """),
                    img("""
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
                        """)],
                200,
                True)
            tiles.place_on_random_tile(specimen8, assets.tile("""
                myTile2
                """))
            tiles.place_on_random_tile(ring_deer, assets.tile("""
                myTile2
                """))
            deer_lines = ["Why do you run, child?",
                "Join us...",
                "Your flesh will sustain my children",
                "Praise be, Bayagototh",
                "Your submission is inevitable"]
            specimen8.say_text(deer_lines._pick_random(), 750, False)
        timer.after(750, on_after10)
        
def kill_credit_get():
    if kill_credit == "gel":
        return 0
    elif kill_credit == "bug":
        return 1
    elif kill_credit == "ringu":
        return 2
    elif kill_credit == "bab":
        return 3
    elif kill_credit == "ben":
        return 4
    elif kill_credit == "wall":
        return 5
    elif kill_credit == "deer":
        return 6
    elif kill_credit == "taker":
        return 7
    elif kill_credit == "parasite":
        return 8
    elif kill_credit == "demon":
        return 9
    elif kill_credit == "man":
        return 10
    elif kill_credit == "siren":
        return 11
    elif kill_credit == "face":
        return 12
    elif kill_credit == "otto":
        return 13
    elif kill_credit == "spooper":
        return 14
    elif kill_credit == "tirsiak":
        return 15
    elif kill_credit == "lisa":
        return 16
    elif kill_credit == "guard":
        return 17
    elif kill_credit == "bag":
        return 18
    elif kill_credit == "baby":
        return 19
    elif kill_credit == "hanged":
        return 20
    elif kill_credit == "cow":
        return 21
    elif kill_credit == "bekka":
        return 22
    elif kill_credit == "husks":
        return 23
    elif kill_credit == "charles":
        return 24
    elif kill_credit == "hooked":
        return 25
    else:
        return -1
def deathinsert3():
    death_quotes.insert_at(len(death_quotes), "DEATH IS NO ESCAPE")
    death_quotes.insert_at(len(death_quotes), "You suffered the bite of 87.")
    death_quotes.insert_at(len(death_quotes),
        """
            BEYOND THAT DOOR IS ANOTHER WORLD.
            A WORLD MADE OF DREAMS...
            A WORLD WHERE ALL YOUR FANTASIES HAVE COME TRUE.
            A WORLD FULL OF EVERYONE'S SICK FANTASIES.
            A WORLD LUSTING TO INCLUDE YOU.
            """)
    death_quotes.insert_at(len(death_quotes), "You were eaten by packs of wolves.")
    death_quotes.insert_at(len(death_quotes),
        """
            You cannot dream without darkness.
            You cannot wake without pain.
            Tear off your foolish disguise.
            """)
    death_quotes.insert_at(len(death_quotes),
        """
            I'm sorry. What am I doing? Why am I doing this?
            I'm sorry. What is happening to me? Why can't I control myself?
            I'm sorry. Why am I doing this?
            I'm sorry. I'm so sorry.
            Why is this happening to me?
            Why can't I control myself?
            I'm sorry.
            """)

def on_on_overlap8(sprite12, otherSprite8):
    global husks_cooldown, kill_credit
    if husks_cooldown:
        if sprites.read_data_boolean(otherSprite8, "stunned") == False:
            health_player.value += -15
            husks_cooldown = False
            
            def on_after11():
                global husks_cooldown
                husks_cooldown = True
            timer.after(5000, on_after11)
            
            music.play(music.melody_playable(music.small_crash),
                music.PlaybackMode.UNTIL_DONE)
            kill_credit = "husks"
sprites.on_overlap(SpriteKind.player, SpriteKind.Husks, on_on_overlap8)

def mansion_navigate(room1: number, room2: number, pos1X: number, pos1Y: number, pos2X: number, pos2Y: number):
    global victorian_room_number
    stamina_bar.value = 100
    if victorian_room_number == room1:
        tiles.set_current_tilemap(victorian_mansion[room2])
        victorian_room_number = room2
        tiles.place_on_tile(mySprite, tiles.get_tile_location(pos2X, pos2Y))
    elif victorian_room_number == room2:
        tiles.set_current_tilemap(victorian_mansion[room1])
        victorian_room_number = room1
        tiles.place_on_tile(mySprite, tiles.get_tile_location(pos1X, pos1Y))
def old_man():
    global old_man_stamina, man_cooldown, old_man_found, specimen12
    man_chase = 0
    old_man_stamina = 1555555555500
    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_12)
    man_cooldown = True
    old_man_found = False
    specimen12 = sprites.create(img("""
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
            """),
        SpriteKind.Specimen_12)
    if man_chase:
        tiles.place_on_random_tile(specimen12, assets.tile("""
            myTile2
            """))
        
        def on_after12():
            global old_man_stamina
            tiles.place_on_random_tile(specimen12, assets.tile("""
                myTile2
                """))
            old_man_stamina = 100
            specimen12.set_image(img("""
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
                """))
        timer.after(780, on_after12)
        

def on_overlap_tile5(sprite13, location5):
    tiles.set_tile_at(location5, assets.tile("""
        myTile49
        """))
    tiles.set_wall_at(location5, True)
scene.on_overlap_tile(SpriteKind.Shadow_Animal,
    assets.tile("""
        myTile0
        """),
    on_overlap_tile5)

def death_message():
    global death_quotes, death_quote_position
    death_quotes = []
    deathinsert1()
    deathinsert2()
    deathinsert3()
    deathinsert4()
    deathinsert5()
    death_quote_position = death_quotes[kill_credit_get()]
    game.show_long_text(death_quote_position, DialogLayout.FULL)
def bekka():
    global bekka_cooldown, bekka_appear, monster6
    bekka_cooldown = True
    bekka_appear = False
    sprites.destroy_all_sprites_of_kind(SpriteKind.Monster_6)
    monster6 = sprites.create(img("""
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
            """),
        SpriteKind.Monster_6)
    if bekka_chase:
        
        def on_after13():
            global bekka_appear
            bekka_appear = True
            monster6.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
            tiles.place_on_random_tile(monster6, assets.tile("""
                myTile1
                """))
        timer.after(600, on_after13)
        
def husks():
    global husks_cooldown, husks_doll
    husks_chase = 0
    husks_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.Husks)
    sprites.destroy_all_sprites_of_kind(SpriteKind.food)
    if husks_chase:
        for index in range(4):
            husks_doll = sprites.create(img("""
                    . . c c 3 5 . .
                    . . c 3 4 5 . .
                    . . 3 a 5 c . .
                    . c 3 a 3 b c .
                    . 3 a a 3 b c .
                    . a c 3 b 5 4 .
                    . . c b 5 5 . .
                    . . 3 b c c . .
                    """),
                SpriteKind.Husks)
            sprites.set_data_number(husks_doll, "hp", randint(3, 5))
            tiles.place_on_random_tile(husks_doll, assets.tile("""
                myTile0
                """))
            sprites.set_data_boolean(husks_doll, "stunned", True)
        
        def on_after14():
            for value4 in sprites.all_of_kind(SpriteKind.Husks):
                value4.follow(mySprite, 30)
                sprites.set_data_boolean(value4, "stunned", False)
        timer.after(2000, on_after14)
        

def on_overlap_tile6(sprite14, location6):
    tiles.place_on_random_tile(sprite14, assets.tile("""
        myTile2
        """))
scene.on_overlap_tile(SpriteKind.Specimen_2,
    assets.tile("""
        myTile
        """),
    on_overlap_tile6)

def on_on_overlap9(sprite15, otherSprite9):
    global stunned_bug
    otherSprite9.set_image(img("""
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
        """))
    stunned_bug = sprites.create(img("""
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
            """),
        SpriteKind.food)
    stunned_bug.set_position(otherSprite9.x, otherSprite9.y)
    partbug1.unfollow()
    partbug2.unfollow()
    partbug3.unfollow()
    
    def on_after15():
        otherSprite9.set_image(img("""
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
            """))
        otherSprite9.set_position(stunned_bug.x, stunned_bug.y)
        stunned_bug.set_image(img("""
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
            """))
        partbug1.follow(specimen_3, 130)
        partbug2.follow(partbug1, 110)
        partbug3.follow(partbug2, 90)
    timer.after(500, on_after15)
    
sprites.on_overlap(SpriteKind.Axe, SpriteKind.Specimen_3, on_on_overlap9)

def on_overlap_tile7(sprite16, location7):
    mansion_navigate(2, 4, 5, 3, 9, 8)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile15
        """),
    on_overlap_tile7)

def woormy_charles():
    global charles_health, charles_gets_hit, charles_cooldown, charles_appear, woormy_charles_doll
    charles_health = 10
    charles_gets_hit = True
    charles_cooldown = True
    charles_appear = False
    sprites.destroy_all_sprites_of_kind(SpriteKind.Woormy_Charles)
    if charles_chase:
        woormy_charles_doll = sprites.create(img("""
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
                """),
            SpriteKind.Woormy_Charles)
        tiles.place_on_random_tile(woormy_charles_doll, assets.tile("""
            myTile2
            """))
        woormy_charles_doll.set_position(woormy_charles_doll.x, woormy_charles_doll.y - 32)
        animation.run_image_animation(woormy_charles_doll,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            250,
            False)
        
        def on_after16():
            global charles_appear
            charles_appear = True
        timer.after(1200, on_after16)
        

def on_on_overlap10(sprite17, otherSprite10):
    global parasite_form_until_hit, parasite_form
    parasite_form_until_hit = False
    specimen10.set_image(img("""
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
        """))
    parasite_form = 2
sprites.on_overlap(SpriteKind.Axe, SpriteKind.Specimen_10, on_on_overlap10)

def cardboard():
    global specimen1
    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_1)
    sprites.destroy_all_sprites_of_kind(SpriteKind.food)
    specimen1 = sprites.create(img("""
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
            """),
        SpriteKind.Specimen_1)
    specimen1.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
    tiles.place_on_random_tile(specimen1, assets.tile("""
        myTile
        """))

def on_on_overlap11(sprite18, otherSprite11):
    if sprites.read_data_boolean(otherSprite11, "stunned") == False:
        otherSprite11.follow(mySprite, 0)
        spriteutils.set_velocity_at_angle(otherSprite11,
            spriteutils.angle_from(mySprite, otherSprite11),
            100)
        sprites.set_data_boolean(otherSprite11, "stunned", True)
        sprites.change_data_number_by(otherSprite11, "hp", -1)
        
        def on_after17():
            spriteutils.set_velocity_at_angle(otherSprite11,
                spriteutils.angle_from(mySprite, otherSprite11),
                0)
            if sprites.read_data_number(otherSprite11, "hp") > 0:
                sprites.set_data_boolean(otherSprite11, "stunned", False)
                otherSprite11.follow(mySprite, 30)
        timer.after(500, on_after17)
        
        if sprites.read_data_number(otherSprite11, "hp") > 2:
            otherSprite11.set_image(img("""
                . . c c 3 5 . .
                . . c 3 4 5 . .
                . . 3 a 5 c . .
                . c 3 a 3 b c .
                . 3 a a 3 b c .
                . a c 3 b 5 4 .
                . . c b 5 5 . .
                . . 3 b c c . .
                """))
        elif sprites.read_data_number(otherSprite11, "hp") > 1:
            otherSprite11.set_image(img("""
                . . c c 2 2 . .
                . . c 2 2 5 . .
                . . 2 2 5 c . .
                . 2 2 a 3 b c .
                . 3 a a 3 b 2 .
                . a c 3 b 2 2 .
                . . c 2 2 2 . .
                . . 2 2 c c . .
                """))
        elif sprites.read_data_number(otherSprite11, "hp") > 0:
            otherSprite11.set_image(img("""
                . . 2 2 2 2 . .
                . . 3 3 2 5 . .
                . . 2 2 5 2 . .
                . 2 2 a 2 2 c .
                . 3 2 2 3 3 2 .
                . 2 2 3 3 2 2 .
                . . c 2 2 2 . .
                . . 2 2 2 c . .
                """))
        elif sprites.read_data_number(otherSprite11, "hp") <= 0:
            otherSprite11.set_kind(SpriteKind.food)
            animation.run_image_animation(otherSprite11,
                [img("""
                        . . 2 2 2 2 . .
                        . . 3 3 2 5 . .
                        . . 2 2 5 2 . .
                        . 2 2 a 2 2 c .
                        . 3 2 2 3 3 2 .
                        . 2 2 3 3 2 2 .
                        . . c 2 2 2 . .
                        . . 2 2 2 c . .
                        """),
                    img("""
                        . . . . . . . .
                        . . 2 2 2 2 . .
                        . . 3 3 2 5 . .
                        . . 2 2 5 2 . .
                        . 2 2 a 2 2 c .
                        . 3 2 2 3 3 2 .
                        . 2 2 3 3 2 2 .
                        . . c 2 2 2 . .
                        """),
                    img("""
                        . . . . . . . .
                        . . . . . . . .
                        . . 2 2 2 2 . .
                        . . 3 3 2 5 . .
                        . . 2 2 5 2 . .
                        . 2 2 a 2 2 c .
                        . 3 2 2 3 3 2 .
                        . 2 2 3 3 2 2 .
                        """),
                    img("""
                        . . . . . . . .
                        . . . . . . . .
                        . . . . . . . .
                        . . 2 2 2 2 . .
                        . . 3 3 2 5 . .
                        . . 2 2 5 2 . .
                        . 2 2 a 2 2 c .
                        . 3 2 2 3 3 2 .
                        """),
                    img("""
                        . . . . . . . .
                        . . . . . . . .
                        . . . . . . . .
                        . . . . . . . .
                        . . 2 2 2 2 . .
                        . . 3 3 2 5 . .
                        . . 2 2 5 2 . .
                        . 2 2 a 2 2 c .
                        """),
                    img("""
                        . . . . . . . .
                        . . . . . . . .
                        . . . . . . . .
                        . . . . . . . .
                        . . . . . . . .
                        . . 2 2 2 2 . .
                        . . 3 3 2 5 . .
                        . . 2 2 5 2 . .
                        """)],
                70,
                False)
sprites.on_overlap(SpriteKind.Axe, SpriteKind.Husks, on_on_overlap11)

def on_on_overlap12(sprite19, otherSprite12):
    global deer_cooldown, kill_credit
    if deer_cooldown:
        health_player.value += -30
        deer_cooldown = False
        
        def on_after18():
            global deer_cooldown
            deer_cooldown = True
        timer.after(3000, on_after18)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "deer"
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_8, on_on_overlap12)

def on_overlap_tile8(sprite20, location8):
    global parlor_key
    parlor_key = True
    mySprite.say_text("Parlor key found!", 5000, False)
    tiles.set_tile_at(location8, assets.tile("""
        myTile7
        """))
    victorian_mansion.remove_at(8)
    victorian_mansion.insert_at(8, tilemap("""
        level32
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile32
        """),
    on_overlap_tile8)

def on_on_overlap13(sprite21, otherSprite13):
    otherSprite13.set_image(img("""
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
        """))
    
    def on_after19():
        otherSprite13.set_image(img("""
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
            """))
    timer.after(500, on_after19)
    
sprites.on_overlap(SpriteKind.Axe, SpriteKind.Specimen_12, on_on_overlap13)

def on_on_overlap14(sprite22, otherSprite14):
    global stunned_ben
    if Math.percent_chance(75):
        otherSprite14.set_image(img("""
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
            """))
        stunned_ben = sprites.create(img("""
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
                """),
            SpriteKind.food)
        stunned_ben.set_position(otherSprite14.x, otherSprite14.y)
    else:
        otherSprite14.set_image(img("""
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
            """))
        otherSprite14.set_position(sprite22.x, sprite22.y)
        
        def on_after20():
            otherSprite14.set_image(img("""
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
                """))
        timer.after(500, on_after20)
        
sprites.on_overlap(SpriteKind.Axe, SpriteKind.Specimen_6, on_on_overlap14)

def on_a_pressed():
    global canFight, axe_weapon, stamina_use
    if xF == 0 and yF == 0:
        if canFight:
            stamina_bar.value += -10
            canFight = False
            axe_weapon = sprites.create(img("""
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    """),
                SpriteKind.Axe)
            axe_weapon.set_position(mySprite.x, mySprite.y)
            axe_weapon.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
            
            def on_after21():
                animation.run_image_animation(axe_weapon,
                    [img("""
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
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
                            """),
                        img("""
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
                            ...aaaaaaaaaa.......b.........................b....aaaaaaaaa....
                            ...afaa1aafaa.......b..........................b....aaaaaaaa....
                            ....................b..........................b....aaaaaaaa....
                            ....................bb.........................b....aaaaaaaa....
                            ....................bb..........................b...aaaaaaaa....
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
                            """),
                        img("""
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
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
                            """),
                        img("""
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
                            ................................................................
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
                            """)],
                    100,
                    False)
                
                def on_after22():
                    global canFight
                    sprites.destroy(axe_weapon)
                    canFight = True
                timer.after(200, on_after22)
                
            timer.after(100, on_after21)
            
    else:
        if stamina_bar.value > 0:
            stamina_use = True
        elif stamina_bar.value <= 0:
            stamina_use = False
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap15(sprite23, otherSprite15):
    global otto_cooldown, kill_credit
    if otto_cooldown:
        health_player.value += -15
        otto_cooldown = False
        
        def on_after23():
            global otto_cooldown
            otto_cooldown = True
        timer.after(3000, on_after23)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "otto"
sprites.on_overlap(SpriteKind.player,
    SpriteKind.Unknown_specimen_2,
    on_on_overlap15)

def on_on_overlap16(sprite24, otherSprite16):
    global tirsiak_cooldown, kill_credit
    if tirsiak_cooldown:
        health_player.value += -30
        tirsiak_cooldown = False
        
        def on_after24():
            global tirsiak_cooldown
            tirsiak_cooldown = True
        timer.after(500, on_after24)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "tirsiak"
sprites.on_overlap(SpriteKind.player,
    SpriteKind.Unknown_specimen_4,
    on_on_overlap16)

def room_random():
    global stamina_use, roomRandom
    stamina_use = False
    roomRandom = [tilemap("""
            level31
            """),
        tilemap("""
            level38
            """),
        tilemap("""
            level39
            """),
        tilemap("""
            level40
            """),
        tilemap("""
            level41
            """),
        tilemap("""
            level42
            """),
        tilemap("""
            level43
            """),
        tilemap("""
            level51
            """)]
    tiles.set_current_tilemap(roomRandom._pick_random())

def on_overlap_tile9(sprite25, location9):
    tiles.place_on_random_tile(sprite25, assets.tile("""
        myTile0
        """))
    
    def on_after25():
        for value5 in tiles.get_tiles_by_type(assets.tile("""
            myTile49
            """)):
            tiles.set_tile_at(value5, assets.tile("""
                myTile0
                """))
            tiles.set_wall_at(value5, False)
    timer.after(5, on_after25)
    
scene.on_overlap_tile(SpriteKind.Shadow_Animal,
    assets.tile("""
        myTile2
        """),
    on_overlap_tile9)

def on_overlap_tile10(sprite26, location10):
    if parlor_key:
        mansion_navigate(7, 9, 5, 1, 6, 14)
        if victorian_room_number == 9:
            mansion_man_search(6, 15, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile33
        """),
    on_overlap_tile10)

def wall():
    global wall_rooms, specimen7
    wall_chase = 0
    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_1)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_7)
    if wall_chase:
        wall_rooms = [tilemap("""
                level6
                """),
            tilemap("""
                level11
                """),
            tilemap("""
                level7
                """),
            tilemap("""
                level8
                """),
            tilemap("""
                level9
                """)]
        tiles.set_current_tilemap(wall_rooms._pick_random())
        tiles.place_on_random_tile(mySprite, assets.tile("""
            myTile2
            """))
        for value6 in tiles.get_tiles_by_type(assets.tile("""
            myTile4
            """)):
            tiles.set_wall_at(value6, True)
        specimen7 = sprites.create(img("""
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
                """),
            SpriteKind.Specimen_7)
        specimen7.set_position(128, 384)
        
        def on_after26():
            specimen7.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
            specimen7.set_velocity(0, -22)
        timer.after(1000, on_after26)
        

def on_on_overlap17(sprite27, otherSprite17):
    global charles_gets_hit, charles_appear, charles_health
    if charles_appear:
        if charles_gets_hit:
            charles_gets_hit = False
            charles_appear = False
            charles_health += -1
            spriteutils.set_velocity_at_angle(otherSprite17,
                spriteutils.angle_from(mySprite, otherSprite17),
                100)
            if charles_health <= 0:
                spriteutils.set_velocity_at_angle(otherSprite17,
                    spriteutils.angle_from(mySprite, otherSprite17),
                    0)
                animation.run_image_animation(woormy_charles_doll,
                    [img("""
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
                            """),
                        img("""
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
                            """),
                        img("""
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
                            """),
                        img("""
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
                            """),
                        img("""
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
                            """)],
                    250,
                    False)
            else:
                
                def on_after27():
                    global charles_gets_hit, charles_appear
                    charles_gets_hit = True
                    charles_appear = True
                timer.after(500, on_after27)
                
sprites.on_overlap(SpriteKind.Axe, SpriteKind.Woormy_Charles, on_on_overlap17)

def on_overlap_tile11(sprite28, location11):
    mansion_navigate(0, 1, 15, 11, 1, 11)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile9
        """),
    on_overlap_tile11)

def on_overlap_tile12(sprite29, location12):
    mansion_navigate(11, 12, 1, 8, 14, 7)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile42
        """),
    on_overlap_tile12)

def lisa():
    global lisa_observed, lisa_cooldown, lisa_appear, unknownspecimen5
    lisa_observed = 1111111
    lisa_cooldown = True
    lisa_appear = False
    sprites.destroy_all_sprites_of_kind(SpriteKind.Unknown_specimen_5)
    unknownspecimen5 = sprites.create(img("""
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
            """),
        SpriteKind.Unknown_specimen_5)
    if lisa_chase:
        
        def on_after28():
            global lisa_observed, lisa_appear
            lisa_observed = 50
            lisa_appear = True
            unknownspecimen5.set_image(img("""
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
                """))
            tiles.place_on_random_tile(unknownspecimen5, assets.tile("""
                myTile2
                """))
        timer.after(1000, on_after28)
        

def on_on_overlap18(sprite30, otherSprite18):
    global gooped
    gooped = True
sprites.on_overlap(SpriteKind.player, SpriteKind.Goop, on_on_overlap18)

def tirsiak():
    global tirsiak_cooldown, shadow_animal
    tirsiak_chase = 0
    tirsiak_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.Unknown_specimen_4)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Shadow_Animal)
    if tirsiak_chase:
        
        def on_after29():
            global unknownspecimen4
            unknownspecimen4 = sprites.create(img("""
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
                    """),
                SpriteKind.Unknown_specimen_4)
            unknownspecimen4.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
            unknownspecimen4.follow(mySprite, 80)
            tiles.place_on_random_tile(unknownspecimen4, assets.tile("""
                myTile2
                """))
        timer.after(1000, on_after29)
        
        shadow_animal = sprites.create(img("""
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
                """),
            SpriteKind.Shadow_Animal)
        shadow_animal.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
        tiles.place_on_random_tile(shadow_animal, assets.tile("""
            myTile0
            """))
        shadow_animal.set_scale(3, ScaleAnchor.MIDDLE)
        
        def on_after30():
            shadow_animal.set_scale(1, ScaleAnchor.MIDDLE)
            for value7 in tiles.get_tiles_by_type(assets.tile("""
                myTile49
                """)):
                tiles.set_tile_at(value7, assets.tile("""
                    myTile0
                    """))
                tiles.set_wall_at(value7, False)
        timer.after(10, on_after30)
        
def parasite():
    global parasite_form, parasite_cooldown, parasite_form_until_hit, specimen10
    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_10)
    parasite_form = 1
    parasite_cooldown = True
    parasite_form_until_hit = True
    specimen10 = sprites.create(img("""
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
            """),
        SpriteKind.Specimen_10)
    specimen10.set_position(-8000, -8000)
    if parasite_chase:
        
        def on_after31():
            global parasite_form_until_hit, parasite_form
            parasite_form_until_hit = True
            parasite_form = 1
            specimen10.set_image(img("""
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
                """))
            tiles.place_on_random_tile(specimen10, assets.tile("""
                myTile2
                """))
        timer.after(800, on_after31)
        

def on_on_overlap19(sprite31, otherSprite19):
    global kill_credit
    health_player.value += -1034729752354
    music.play(music.melody_playable(music.small_crash),
        music.PlaybackMode.UNTIL_DONE)
    kill_credit = "taker"
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_9, on_on_overlap19)

def game_yes():
    global game_active, mySprite, canFight, health_player, stamina_bar, otto_chase
    game_active = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.text)
    info.set_score(0)
    mySprite = sprites.create(img("""
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
            """),
        SpriteKind.player)
    canFight = True
    controller.move_sprite(mySprite)
    scene.camera_follow_sprite(mySprite)
    health_player = statusbars.create(50, 4, StatusBarKind.health)
    health_player.set_bar_border(1, 15)
    health_player.value = 100
    stamina_bar = statusbars.create(50, 4, StatusBarKind.energy)
    stamina_bar.set_bar_border(1, 15)
    stamina_bar.value = 100
    health_player.set_position(25, 2)
    stamina_bar.set_position(25, 5)
    otto_chase = True
    flashlightSpawn()
    rooms()

def on_on_overlap20(sprite32, otherSprite20):
    global bekka_cooldown, kill_credit
    if bekka_cooldown:
        health_player.value += -30
        bekka_cooldown = False
        
        def on_after32():
            global bekka_cooldown
            bekka_cooldown = True
        timer.after(3000, on_after32)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "bekka"
sprites.on_overlap(SpriteKind.player, SpriteKind.Monster_6, on_on_overlap20)

def on_on_overlap21(sprite33, otherSprite21):
    global hanged_cooldown, kill_credit
    if hanged_cooldown:
        health_player.value += -20
        otherSprite21.unfollow()
        hanged_cooldown = False
        otherSprite21.set_position(mySprite.x, mySprite.y)
        
        def on_after33():
            global hanged_cooldown
            hanged_cooldown = True
        timer.after(1000, on_after33)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "hanged"
sprites.on_overlap(SpriteKind.player, SpriteKind.Monster_4, on_on_overlap21)

def body_bag():
    global bag_cooldown, monster2
    bag_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.Monster_2)
    monster2 = sprites.create(img("""
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
            """),
        SpriteKind.Monster_2)
    if bag_chase:
        tiles.place_on_random_tile(monster2, assets.tile("""
            myTile2
            """))
        
        def on_after34():
            global monster2
            monster2 = sprites.create(img("""
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
                    """),
                SpriteKind.Monster_2)
            tiles.place_on_random_tile(monster2, assets.tile("""
                myTile2
                """))
        timer.after(800, on_after34)
        

def on_overlap_tile13(sprite34, location13):
    if library_key:
        mansion_navigate(7, 8, 1, 5, 14, 8)
        if victorian_room_number == 9:
            mansion_man_search(15, 8, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile29
        """),
    on_overlap_tile13)

def on_on_overlap22(sprite35, otherSprite22):
    global gel_cooldown, kill_credit
    if gel_cooldown:
        health_player.value += -45
        gel_cooldown = False
        
        def on_after35():
            global gel_cooldown
            gel_cooldown = True
        timer.after(3000, on_after35)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "gel"
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_2, on_on_overlap22)

def on_on_overlap23(sprite36, otherSprite23):
    global ringu_cooldown, kill_credit
    if ringu_cooldown:
        health_player.value += -45
        ringu_cooldown = False
        
        def on_after36():
            global ringu_cooldown
            ringu_cooldown = True
        timer.after(3000, on_after36)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "ringu"
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_4, on_on_overlap23)

def on_on_overlap24(sprite37, otherSprite24):
    sprites.destroy(otherSprite24, effects.blizzard, 100)
    for value8 in tiles.get_tiles_by_type(assets.tile("""
        myTile49
        """)):
        tiles.set_tile_at(value8, assets.tile("""
            myTile0
            """))
        tiles.set_wall_at(value8, False)
sprites.on_overlap(SpriteKind.Axe, SpriteKind.Shadow_Animal, on_on_overlap24)

def on_on_overlap25(sprite38, otherSprite25):
    global man_wander_target, old_man_check
    sprites.destroy(otherSprite25)
    man_wander_target = sprites.create(img("""
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
            """),
        SpriteKind.Man_Wander)
    tiles.place_on_random_tile(man_wander_target, assets.tile("""
        myTile7
        """))
    old_man_check = True
    scene.follow_path(specimen12,
        scene.a_star(specimen12.tilemap_location(),
            man_wander_target.tilemap_location()),
        60)
sprites.on_overlap(SpriteKind.Specimen_12,
    SpriteKind.Man_Wander,
    on_on_overlap25)

def on_on_overlap26(sprite39, otherSprite26):
    global jumpscare
    otherSprite26.set_image(img("""
        .
        """))
    jumpscare = sprites.create(img("""
        .
        """), SpriteKind.food)
    jumpscare.set_position(mySprite.x, mySprite.y)
    music.play(music.melody_playable(music.big_crash),
        music.PlaybackMode.UNTIL_DONE)
    jumpscare.set_image(img("""
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
        """))
    jumpscare.set_position(mySprite.x, mySprite.y)
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_1, on_on_overlap26)

def on_overlap_tile14(sprite40, location14):
    mansion_navigate(0, 4, 8, 8, 5, 14)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile21
        """),
    on_overlap_tile14)

def white_face():
    global face_cooldown, unknownspecimen1
    face_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.Unknown_specimen_1)
    unknownspecimen1 = sprites.create(img("""
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
            """),
        SpriteKind.Unknown_specimen_1)
    if face_chase:
        
        def on_after37():
            global face_speed, unknownspecimen1
            sprites.destroy_all_sprites_of_kind(SpriteKind.Unknown_specimen_1)
            face_speed = 1
            unknownspecimen1 = sprites.create(img("""
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
                    """),
                SpriteKind.Unknown_specimen_1)
            unknownspecimen1.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
            tiles.place_on_random_tile(unknownspecimen1, assets.tile("""
                myTile2
                """))
        timer.after(650, on_after37)
        

def on_overlap_tile15(sprite41, location15):
    if exit_key:
        tiles.set_current_tilemap(tilemap("""
            level4
            """))
        rooms()
        info.change_score_by(1)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile20
        """),
    on_overlap_tile15)

def settings_menu_():
    global settings_menu
    settings_menu = miniMenu.create_menu(miniMenu.create_menu_item("Volume",
            img("""
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
                """)),
        miniMenu.create_menu_item("Message Toggle",
            img("""
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
                """)),
        miniMenu.create_menu_item("Reset Data",
            img("""
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
                """)),
        miniMenu.create_menu_item("Back",
            img("""
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
                """)))
    miniMenu.set_dimensions(settings_menu, 100, 100)
    settings_menu.set_position(45, 82)
    miniMenu.set_frame(settings_menu,
        img("""
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
            """))
    
    def on_button_pressed_a(selection, selectedIndex):
        global volume_save, message_toggle, data_reset_confirmation
        if selectedIndex == 0:
            volume_save = game.ask_for_number("0 - 255", 3)
            if volume_save < 0:
                volume_save = 0
            elif volume_save > 255:
                volume_save = 255
            blockSettings.write_number("volume", volume_save)
        elif selectedIndex == 1:
            message_toggle = game.ask_for_number("Else to toggle on, 1 to toggle off.", 1)
            if message_toggle == 1:
                blockSettings.write_number("message", 1)
            else:
                blockSettings.write_number("message", 0)
        elif selectedIndex == 2:
            data_reset_confirmation = game.ask_for_string("TYPE \"RESET\" TO RESET DATA", 5)
            if data_reset_confirmation == "RESET":
                miniMenu.close(settings_menu)
                game.show_long_text("As the memories fade away       My soul wanders into astray",
                    DialogLayout.CENTER)
                music.play(music.create_sound_effect(WaveShape.NOISE,
                        856,
                        785,
                        255,
                        255,
                        5000,
                        SoundExpressionEffect.NONE,
                        InterpolationCurve.LINEAR),
                    music.PlaybackMode.UNTIL_DONE)
                blockSettings.clear()
            else:
                game.splash("Memories persist.", "Memories persist.")
        game.reset()
    miniMenu.on_button_pressed(settings_menu, miniMenu.Button.A, on_button_pressed_a)
    

def on_overlap_tile16(sprite42, location16):
    tiles.place_on_random_tile(sprite42, assets.tile("""
        myTile2
        """))
scene.on_overlap_tile(SpriteKind.Specimen_6,
    assets.tile("""
        myTile
        """),
    on_overlap_tile16)

def on_a_released():
    global stamina_use
    stamina_use = False
controller.A.on_event(ControllerButtonEvent.RELEASED, on_a_released)

def on_on_overlap27(sprite43, otherSprite27):
    global face_cooldown, kill_credit
    if face_cooldown:
        health_player.value += -30
        face_cooldown = False
        
        def on_after38():
            global face_cooldown
            face_cooldown = True
        timer.after(1000, on_after38)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "face"
        spriteutils.place_angle_from(otherSprite27, randint(0, 360), randint(100, 120), mySprite)
sprites.on_overlap(SpriteKind.player,
    SpriteKind.Unknown_specimen_1,
    on_on_overlap27)

def on_overlap_tile17(sprite44, location17):
    global exit_key
    exit_key = True
    mySprite.say_text("Exit key found!", 5000, False)
    tiles.set_tile_at(location17, assets.tile("""
        myTile40
        """))
    victorian_mansion.remove_at(12)
    victorian_mansion.insert_at(12, tilemap("""
        level34
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile44
        """),
    on_overlap_tile17)

def on_on_overlap28(sprite45, otherSprite28):
    spriteutils.place_angle_from(otherSprite28, randint(0, 360), randint(100, 120), mySprite)
sprites.on_overlap(SpriteKind.Axe, SpriteKind.Specimen_11, on_on_overlap28)

def siren():
    global siren_cooldown, specimen13, siren_rooms
    siren_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_13)
    specimen13 = sprites.create(img("""
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
            """),
        SpriteKind.Specimen_13)
    if siren_chase:
        siren_rooms = [tilemap("""
                level35
                """),
            tilemap("""
                level13
                """),
            tilemap("""
                level36
                """),
            tilemap("""
                level37
                """)]
        tiles.set_current_tilemap(siren_rooms._pick_random())
        tiles.place_on_random_tile(mySprite, assets.tile("""
            myTile2
            """))
        for value9 in tiles.get_tiles_by_type(assets.tile("""
            myTile48
            """)):
            tiles.set_wall_at(value9, True)
        
        def on_after39():
            global player_on_crate, water_where
            player_on_crate = False
            specimen13.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
            animation.run_image_animation(specimen13,
                [img("""
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
                        """),
                    img("""
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
                        """),
                    img("""
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
                        """),
                    img("""
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
                        """),
                    img("""
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
                        """),
                    img("""
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
                        """),
                    img("""
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
                        """),
                    img("""
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
                        """)],
                100,
                True)
            tiles.place_on_random_tile(specimen13, assets.tile("""
                myTile2
                """))
            water_where = sprites.create(img("""
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
                    """),
                SpriteKind.Man_Wander)
            tiles.place_on_random_tile(water_where, assets.tile("""
                myTile45
                """))
        timer.after(750, on_after39)
        
def gel():
    global gooped, gel_cooldown, specimen2, goop_puddle, gel_spawn
    gooped = False
    gel_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_2)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Goop)
    specimen2 = sprites.create(img("""
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
            """),
        SpriteKind.Specimen_2)
    goop_puddle = sprites.create(img("""
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
            """),
        SpriteKind.Specimen_2)
    specimen2.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
    tiles.place_on_random_tile(specimen2, assets.tile("""
        myTile
        """))
    if goop_chase:
        gel_spawn = sprites.create(img("""
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
                """),
            SpriteKind.Goop)
        tiles.place_on_random_tile(gel_spawn, assets.tile("""
            myTile2
            """))
        gel_spawn.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
        animation.run_image_animation(gel_spawn,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            150,
            False)
        
        def on_after40():
            specimen2.set_image(img("""
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
                """))
            tiles.place_on_random_tile(specimen2, assets.tile("""
                myTile2
                """))
        timer.after(750, on_after40)
        
        for index2 in range(randint(0, 3)):
            goop_puddle = sprites.create(img("""
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
                    """),
                SpriteKind.Goop)
            tiles.place_on_random_tile(goop_puddle, assets.tile("""
                myTile0
                """))

def on_on_overlap29(sprite46, otherSprite29):
    global gel_spawn
    gel_spawn = sprites.create(img("""
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
            """),
        SpriteKind.Goop)
    gel_spawn.set_position(otherSprite29.x, otherSprite29.y)
    animation.run_image_animation(gel_spawn,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        150,
        False)
    animation.run_image_animation(gel_spawn,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        150,
        False)
    otherSprite29.set_image(img("""
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
        """))
    
    def on_after41():
        otherSprite29.set_position(gel_spawn.x, gel_spawn.y)
        otherSprite29.set_image(img("""
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
            """))
    timer.after(1500, on_after41)
    
sprites.on_overlap(SpriteKind.Axe, SpriteKind.Specimen_2, on_on_overlap29)

def settings_check():
    if blockSettings.exists("volume"):
        music.set_volume(blockSettings.read_number("volume"))
    else:
        music.set_volume(128)
    if blockSettings.exists("message"):
        if blockSettings.read_number("message") == 0:
            game.show_long_text("THIS GAME MAY CONTAIN: FLASHING LIGHTS AND DISTURBING MATERIAL! ",
                DialogLayout.CENTER)
            music.play(music.melody_playable(music.ba_ding),
                music.PlaybackMode.UNTIL_DONE)
    else:
        game.show_long_text("THIS GAME MAY CONTAIN: FLASHING LIGHTS AND DISTURBING MATERIAL! ",
            DialogLayout.CENTER)
        music.play(music.melody_playable(music.ba_ding),
            music.PlaybackMode.UNTIL_DONE)
def deathinsert2():
    death_quotes.insert_at(len(death_quotes),
        """
            And I saw, from eyes that were not mine.
            And I felt, with a fear I could not reason.
            They watch us, they invade us.
            And keep us happy, committing treason.
            To a King we didn't deserve.
            To a Son who waits weeping.
            That I knew, from knowledge gained while sleeping.
            """)
    death_quotes.insert_at(len(death_quotes),
        """
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
            TO TAKE THE DEAD
            TO TAKE THE DEAD
            """)
    death_quotes.insert_at(len(death_quotes),
        """
            Now you have nothing to fear.
            Now you have nothing to think.
            Follow your selfish desires.
            Follow your natural instinct.
            After all you're just an animal.
            It's much easier than trying to think.
            """)
    death_quotes.insert_at(len(death_quotes),
        """
            With every bite with bone and skin.
            The temple groaned and shook again.
            His dwelling place did I neglect.
            To the end with bad effect.
            """)
    death_quotes.insert_at(len(death_quotes), "You were sliced to death.")
    death_quotes.insert_at(len(death_quotes), "You were drowned.")
def hanged_man():
    global hanged_observed, hanged_cooldown, monster4, hanged_man_announcement, apparition_hanged_man
    hanged_observed = 1111111
    hanged_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.food)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Monster_4)
    monster4 = sprites.create(img("""
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
            """),
        SpriteKind.Monster_4)
    hanged_man_announcement = ["I MUST CONSUME",
        "DARK WORMS",
        "SCREAM INSIDE",
        "MY BRAIN",
        "TO END TURMOIL",
        "BEGGING ME",
        "TO EAT AGAIN",
        "HEARTS, AND BLOOD",
        "AND BILE, AND SOIL"]
    if hanged_chase:
        apparition_hanged_man = textsprite.create(hanged_man_announcement._pick_random(), 0, 2)
        apparition_hanged_man.z = 10000000
        apparition_hanged_man.set_flag(SpriteFlag.GHOST_THROUGH_SPRITES, True)
        apparition_hanged_man.set_position(mySprite.x, mySprite.y)
        apparition_hanged_man.follow(mySprite, 500)
        
        def on_after42():
            global hanged_observed
            sprites.destroy(apparition_hanged_man)
            hanged_observed = 60
            monster4.set_image(img("""
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
                """))
            tiles.place_on_random_tile(monster4, assets.tile("""
                myTile2
                """))
        timer.after(1000, on_after42)
        

def on_overlap_tile18(sprite47, location18):
    tiles.place_on_random_tile(sprite47, assets.tile("""
        myTile2
        """))
scene.on_overlap_tile(SpriteKind.Specimen_5,
    assets.tile("""
        myTile
        """),
    on_overlap_tile18)

def on_on_overlap30(sprite48, otherSprite30):
    global man_cooldown, kill_credit
    if man_cooldown:
        if old_man_found:
            health_player.value += -100
        else:
            health_player.value += -45
        man_cooldown = False
        
        def on_after43():
            global man_cooldown
            man_cooldown = True
        timer.after(1500, on_after43)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "man"
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_12, on_on_overlap30)

def on_overlap_tile19(sprite49, location19):
    tiles.place_on_random_tile(sprite49, assets.tile("""
        myTile0
        """))
    
    def on_after44():
        for value10 in tiles.get_tiles_by_type(assets.tile("""
            myTile49
            """)):
            tiles.set_tile_at(value10, assets.tile("""
                myTile0
                """))
            tiles.set_wall_at(value10, False)
    timer.after(5, on_after44)
    
scene.on_overlap_tile(SpriteKind.Shadow_Animal,
    assets.tile("""
        myTile1
        """),
    on_overlap_tile19)

def on_on_overlap31(sprite50, otherSprite31):
    global lisa_cooldown, kill_credit
    if lisa_cooldown:
        health_player.value += -30
        otherSprite31.unfollow()
        lisa_cooldown = False
        otherSprite31.set_position(mySprite.x, mySprite.y)
        
        def on_after45():
            global lisa_cooldown
            lisa_cooldown = True
        timer.after(1000, on_after45)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "lisa"
sprites.on_overlap(SpriteKind.player,
    SpriteKind.Unknown_specimen_5,
    on_on_overlap31)

def on_on_overlap32(sprite51, otherSprite32):
    tiles.place_on_random_tile(otherSprite32, assets.tile("""
        myTile45
        """))
sprites.on_overlap(SpriteKind.Specimen_13,
    SpriteKind.Man_Wander,
    on_on_overlap32)

def extra_menu():
    game.show_long_text("Original game by LAG Studios, recreated by Longlinh.",
        DialogLayout.CENTER)
    game.reset()
def summon():
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

def on_on_overlap33(sprite52, otherSprite33):
    global parasite_cooldown, parasite_form, kill_credit
    if parasite_cooldown:
        health_player.value += -50
        parasite_cooldown = False
        parasite_form = -1
        specimen10.set_image(img("""
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
            """))
        
        def on_after46():
            global parasite_form_until_hit
            parasite_form_until_hit = True
        timer.after(1000, on_after46)
        
        
        def on_after47():
            global parasite_cooldown
            parasite_cooldown = True
        timer.after(3000, on_after47)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "parasite"
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_10, on_on_overlap33)

def ghost_cow():
    global cow_cooldown, monster5
    cow_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.Monster_5)
    monster5 = sprites.create(img("""
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
            """),
        SpriteKind.Monster_5)
    tiles.place_on_random_tile(monster5, assets.tile("""
        myTile2
        """))
    if cow_chase:
        
        def on_after48():
            tiles.place_on_random_tile(monster5, assets.tile("""
                myTile2
                """))
            monster5.set_image(img("""
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
                """))
        timer.after(890, on_after48)
        
def otto():
    global otto_cooldown, unknownspecimen2
    otto_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.Unknown_specimen_2)
    unknownspecimen2 = sprites.create(img("""
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
            """),
        SpriteKind.Unknown_specimen_2)
    tiles.place_on_random_tile(unknownspecimen2, assets.tile("""
        myTile2
        """))
    if otto_chase:
        
        def on_after49():
            tiles.place_on_random_tile(unknownspecimen2, assets.tile("""
                myTile2
                """))
            unknownspecimen2.set_image(img("""
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
                """))
            animation.run_image_animation(unknownspecimen2,
                [img("""
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
                        """),
                    img("""
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
                        """)],
                300,
                True)
        timer.after(890, on_after49)
        

def on_overlap_tile20(sprite53, location20):
    sprites.destroy(sprite53)
scene.on_overlap_tile(SpriteKind.Specimen_1,
    assets.tile("""
        myTile2
        """),
    on_overlap_tile20)

def bab():
    global bab_cooldown, specimen_5
    color.set_palette(color.original_palette)
    bab_cooldown = True
    if bab_chase:
        sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_5, effects.fire, 500)
    else:
        sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_5)
    specimen_5 = sprites.create(img("""
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
            """),
        SpriteKind.Specimen_5)
    if bab_chase:
        
        def on_after50():
            global specimen_5
            specimen_5 = sprites.create(img("""
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
                    """),
                SpriteKind.Specimen_5)
            specimen_5.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
            tiles.place_on_random_tile(specimen_5, assets.tile("""
                myTile2
                """))
            
            def on_after51():
                scene.set_background_image(img("""
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
                    """))
                for value11 in tiles.get_tiles_by_type(assets.tile("""
                    myTile0
                    """)):
                    tiles.set_tile_at(value11, assets.tile("""
                        transparency16
                        """))
            timer.after(500, on_after51)
            
        timer.after(600, on_after50)
        

def on_overlap_tile21(sprite54, location21):
    if book_secret:
        mansion_navigate(8, 10, 6, 4, 12, 13)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile31
        """),
    on_overlap_tile21)

def on_overlap_tile22(sprite55, location22):
    global library_key
    library_key = True
    mySprite.say_text("Library key found!", 5000, False)
    tiles.set_tile_at(location22, assets.tile("""
        myTile7
        """))
    victorian_mansion.remove_at(6)
    victorian_mansion.insert_at(6, tilemap("""
        level30
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile27
        """),
    on_overlap_tile22)

def on_on_overlap34(sprite56, otherSprite34):
    global charles_cooldown, kill_credit
    if charles_appear:
        if charles_cooldown:
            health_player.value += -25
            charles_cooldown = False
            
            def on_after52():
                global charles_cooldown
                charles_cooldown = True
            timer.after(1000, on_after52)
            
            music.play(music.melody_playable(music.small_crash),
                music.PlaybackMode.UNTIL_DONE)
            kill_credit = "charles"
sprites.on_overlap(SpriteKind.player,
    SpriteKind.Woormy_Charles,
    on_on_overlap34)

def deathinsert1():
    death_quotes.insert_at(len(death_quotes),
        """
            I know what you have done, and what you have yet to do.
            But it's alright, because I'm inside you now.
            We are one but I am many...
            """)
    death_quotes.insert_at(len(death_quotes),
        """
            Once
            In a land of dreams
            I thought I could be free
            But now
            The hunger never sleeps
            """)
    death_quotes.insert_at(len(death_quotes), "Hush now my child, you're safe now.")
    death_quotes.insert_at(len(death_quotes),
        """
            Tiny, Shining holes in the sky.
            Delicate, perfect emptiness.
            Black, growing absences of life.
            Cold, swarming death.
            And we shall become them.
            """)
    death_quotes.insert_at(len(death_quotes),
        """
            To become a puppet is to rid oneself of the pain and harshness of choice.
            Now nothing you do is your fault,
            now you belong to something...
            You belong to me...
            """)
    death_quotes.insert_at(len(death_quotes),
        """
            YOUR ANGER HAS CONSUMED YOU
            YOUR APATHY HAS CONSUMED YOU
            YOUR TEMPER HAS CONSUMED YOU
            YOUR HATE HAS CONSUMED YOU
            YOUR DESIRE HAS CONSUMED YOU
            YOUR RAGE HAS CONSUMED YOU
            YOUR GUILT HAS CONSUMED YOU
            YOUR SORROW HAS CONSUMED YOU
            YOUR WEAKNESS HAS CONSUMED YOU
            YOUR MASK HAS CONSUMED YOU
            YOUR DESIRES HAS CONSUMED YOU
            """)

def on_overlap_tile23(sprite57, location23):
    mansion_navigate(10, 11, 1, 3, 14, 8)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile41
        """),
    on_overlap_tile23)

def deathinsert4():
    death_quotes.insert_at(len(death_quotes),
        """
            Bound by rigor mortis, sealed in plastic shroud,
            A cadaver dreams beneath earth and cloud,
            Sprawled on cold pavement, yearning still,
            For borrowed breath, for vacant will,
            Within its husk, a fantasy awakes,
            For blood that sings and flesh to take,
            By wearing their face, by stealing their name,
            Thus living once again, through stolen frame.
            """)
    death_quotes.insert_at(len(death_quotes),
        """
            The cries of babies ring the brain
            Makes the sane go insane
            And so they were thrown and beaten
            Until their cries became forsaken.
            """)
    death_quotes.insert_at(len(death_quotes),
        """
            Dark worms scream inside my brain.
            Begging me to eat again.
            Hearts, and blood, and bile, and soil.
            I must consume to end turmoil.
            """)
    death_quotes.insert_at(len(death_quotes),
        """
            Your fear allows me to enter your mind.
            Your obligation allows me to control your hands.
            Your reason allows me to break your eyes.
            Your guilt allows me to loosen your neck.
            Your expectation allows me to hide the truth.
            Your tendencies have allowed me to make you
            """)
    death_quotes.insert_at(len(death_quotes), "Don't get up before Saturday.")
    death_quotes.insert_at(len(death_quotes),
        """
            Scarlet burning holes are placed into the skin
            and flesh rebound into an unfamiliar form.
            Molded into something new, the husk reshaped
            into a skin more accepting of the howling void.
            """)
def flashlightSpawn():
    multilights.toggle_lighting(True)
    multilights.add_light_source(mySprite, 5, 5, 0)
    multilights.add_flash_light_source(mySprite, 0, 165, 150, 0, 0)
def ringu():
    global ringu_cooldown
    ringu_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_4)
    if ringu_chase:
        
        def on_after53():
            global specimen_4
            specimen_4 = sprites.create(img("""
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
                    """),
                SpriteKind.Specimen_4)
            specimen_4.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
            specimen_4.follow(mySprite, 90)
            tiles.place_on_random_tile(specimen_4, assets.tile("""
                myTile2
                """))
        timer.after(600, on_after53)
        
def demon():
    global demon_cooldown
    if demon_chase:
        sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_11)
        sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
        tiles.place_on_random_tile(door_invisible, assets.tile("""
            myTile1
            """))
        demon_cooldown = True
        
        def on_after54():
            global specimen11, demon_lines
            specimen11 = sprites.create(img("""
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
                    """),
                SpriteKind.Specimen_11)
            specimen11.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
            tiles.place_on_random_tile(specimen11, assets.tile("""
                myTile2
                """))
            specimen11.follow(mySprite, 100)
            demon_lines = ["I will catch you",
                "Stop running away",
                "I see you",
                "Turn to me"]
            specimen11.say_text(demon_lines._pick_random(), 750, False)
        timer.after(1000, on_after54)
        

def on_on_overlap35(sprite58, otherSprite35):
    spriteutils.place_angle_from(otherSprite35, randint(0, 360), randint(170, 200), mySprite)
sprites.on_overlap(SpriteKind.Axe, SpriteKind.Monster_3, on_on_overlap35)

def baby_head():
    global head_cooldown, monster3
    head_chase = 0
    head_cooldown = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.Monster_3)
    if head_chase:
        monster3 = sprites.create(img("""
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
                """),
            SpriteKind.Monster_3)
        monster3.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
        monster3.follow(mySprite, 52)
        spriteutils.place_angle_from(monster3, randint(0, 360), randint(170, 200), mySprite)

def on_on_overlap36(sprite59, otherSprite36):
    global head_cooldown, kill_credit
    if head_cooldown:
        health_player.value += -20
        head_cooldown = False
        
        def on_after55():
            global head_cooldown
            head_cooldown = True
        timer.after(1000, on_after55)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "head"
sprites.on_overlap(SpriteKind.player, SpriteKind.Monster_3, on_on_overlap36)

def mansion_room():
    global can_mansion, victorian_mansion, victorian_room_number, bab_chase, ben_chase, deer_chase, demon_chase, goop_chase, parasite_chase, ringu_chase, bug_chase, face_chase, otto_chase
    if can_mansion:
        can_mansion = False
        victorian_mansion = [tilemap("""
                level14
                """),
            tilemap("""
                level15
                """),
            tilemap("""
                level16
                """),
            tilemap("""
                level17
                """),
            tilemap("""
                level18
                """),
            tilemap("""
                level19
                """),
            tilemap("""
                level20
                """),
            tilemap("""
                level21
                """),
            tilemap("""
                level22
                """),
            tilemap("""
                level23
                """),
            tilemap("""
                level24
                """),
            tilemap("""
                level25
                """),
            tilemap("""
                level26
                """)]
        tiles.set_current_tilemap(victorian_mansion[0])
        victorian_room_number = 0
        tiles.place_on_random_tile(mySprite, assets.tile("""
            myTile2
            """))
        bab_chase = False
        ben_chase = False
        deer_chase = False
        demon_chase = False
        goop_chase = False
        parasite_chase = False
        ringu_chase = False
        bug_chase = False
        face_chase = False
        otto_chase = False

def on_overlap_tile24(sprite60, location24):
    sprites.destroy(sprite60)
scene.on_overlap_tile(SpriteKind.Specimen_1,
    assets.tile("""
        myTile1
        """),
    on_overlap_tile24)

def on_on_overlap37(sprite61, otherSprite37):
    global ben_cooldown, kill_credit
    if ben_cooldown:
        health_player.value += -45
        ben_cooldown = False
        
        def on_after56():
            global ben_cooldown
            ben_cooldown = True
        timer.after(3000, on_after56)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "ben"
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_6, on_on_overlap37)

def spooper_():
    global spooper_room, spooper_spores
    spooper_chase = 0
    sprites.destroy_all_sprites_of_kind(SpriteKind.Unknown_specimen_3)
    if spooper_chase:
        if spooper_room < 0:
            
            def on_after57():
                global spooper, spooper_room, spooper_spores
                if spooper_room == -5:
                    spooper = sprites.create(img("""
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
                            """),
                        SpriteKind.Unknown_specimen_3)
                elif spooper_room == -4:
                    spooper = sprites.create(img("""
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
                            """),
                        SpriteKind.Unknown_specimen_3)
                elif spooper_room == -3:
                    spooper = sprites.create(img("""
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
                            """),
                        SpriteKind.Unknown_specimen_3)
                elif spooper_room == -2:
                    spooper = sprites.create(img("""
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
                            """),
                        SpriteKind.Unknown_specimen_3)
                elif spooper_room == -1:
                    spooper = sprites.create(img("""
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
                            """),
                        SpriteKind.Unknown_specimen_3)
                    spooper_room += 21
                tiles.place_on_random_tile(spooper, assets.tile("""
                    myTile1
                    """))
                tiles.set_wall_at(spooper.tilemap_location(), True)
                spooper_room += 1
                spooper_spores = False
            timer.after(500, on_after57)
            
        elif spooper_room > 0:
            spooper_room += -1
            spooper_spores = True
            for value12 in tiles.get_tiles_by_type(assets.tile("""
                myTile
                """)):
                tiles.set_tile_at(value12, assets.tile("""
                    myTile50
                    """))
        elif spooper_room == 0:
            spooper_spores = False
        else:
            spooper_room += 1
            spooper_spores = False
def mansion_man_search(doorX: number, doorY: number, basement: bool):
    global man_cooldown, old_man_check
    man_cooldown = True
    tiles.set_wall_at(tiles.get_tile_location(doorX, doorY), True)
    old_man_check = False
    mySprite.say_text("Hide!", 5000, False)
    
    def on_after58():
        global specimen12, man_wander_target
        specimen12 = sprites.create(img("""
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
                """),
            SpriteKind.Specimen_12)
        tiles.place_on_tile(specimen12, tiles.get_tile_location(doorX, doorY))
        man_wander_target = sprites.create(img("""
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
                """),
            SpriteKind.Man_Wander)
        if basement == False:
            tiles.place_on_random_tile(man_wander_target, assets.tile("""
                myTile7
                """))
        else:
            tiles.place_on_random_tile(man_wander_target, assets.tile("""
                myTile40
                """))
        
        def on_after59():
            global old_man_check
            tiles.set_wall_at(tiles.get_tile_location(doorX, doorY), False)
            old_man_check = True
            scene.follow_path(specimen12,
                scene.a_star(specimen12.tilemap_location(),
                    man_wander_target.tilemap_location()),
                60)
            
            def on_after60():
                tiles.set_wall_at(tiles.get_tile_location(doorX, doorY), True)
            timer.after(1000, on_after60)
            
            
            def on_after61():
                global old_man_check
                sprites.destroy_all_sprites_of_kind(SpriteKind.Man_Wander)
                tiles.set_wall_at(tiles.get_tile_location(doorX, doorY), False)
                old_man_check = False
                scene.follow_path(specimen12,
                    scene.a_star(specimen12.tilemap_location(),
                        tiles.get_tile_location(doorX, doorY)),
                    60)
                
                def on_after62():
                    sprites.destroy_all_sprites_of_kind(SpriteKind.Specimen_12)
                timer.after(3000, on_after62)
                
            timer.after(randint(15000, 17000), on_after61)
            
        timer.after(500, on_after59)
        
    timer.after(5000, on_after58)
    

def on_overlap_tile25(sprite62, location25):
    if bedroom_key:
        mansion_navigate(0, 5, 1, 3, 8, 3)
        if Math.percent_chance(25):
            if victorian_room_number == 5:
                mansion_man_search(9, 3, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile23
        """),
    on_overlap_tile25)

def on_overlap_tile26(sprite63, location26):
    mansion_navigate(1, 2, 5, 5, 7, 14)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile14
        """),
    on_overlap_tile26)

def on_on_overlap38(sprite64, otherSprite38):
    global bag_cooldown, kill_credit
    if bag_cooldown:
        health_player.value += -20
        bag_cooldown = False
        
        def on_after63():
            global bag_cooldown
            bag_cooldown = True
        timer.after(1000, on_after63)
        
        music.play(music.melody_playable(music.small_crash),
            music.PlaybackMode.UNTIL_DONE)
        kill_credit = "bag"
sprites.on_overlap(SpriteKind.player, SpriteKind.Monster_2, on_on_overlap38)

def on_overlap_tile27(sprite65, location27):
    mansion_navigate(2, 3, 9, 3, 1, 2)
    if victorian_room_number == 3:
        mansion_man_search(0, 2, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile11
        """),
    on_overlap_tile27)

def on_overlap_tile28(sprite66, location28):
    if bedroom_key:
        mansion_navigate(0, 6, 15, 3, 1, 3)
        if victorian_room_number == 6:
            mansion_man_search(0, 3, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile26
        """),
    on_overlap_tile28)

def on_overlap_tile29(sprite67, location29):
    mansion_navigate(0, 7, 1, 11, 9, 5)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile28
        """),
    on_overlap_tile29)

def on_on_overlap39(sprite68, otherSprite39):
    global siren_cooldown, kill_credit
    if siren_cooldown:
        if player_on_crate == False:
            health_player.value += -45
            siren_cooldown = False
            
            def on_after64():
                global siren_cooldown
                siren_cooldown = True
            timer.after(3000, on_after64)
            
            music.play(music.melody_playable(music.small_crash),
                music.PlaybackMode.UNTIL_DONE)
            kill_credit = "siren"
sprites.on_overlap(SpriteKind.player, SpriteKind.Specimen_13, on_on_overlap39)

old_man_lines: List[str] = []
angle4 = 0
angle3 = 0
angle2 = 0
lastXF = 0
lastYF = 0
angle = 0
lisa_difference = 0
angle_to_lisa = 0
dylisa = 0
dxlisa = 0
hooked_difference = 0
dyhooked = 0
dxhooked = 0
hanged_difference = 0
dyhanged = 0
dxhanged = 0
ben_visible = False
looking_direction = 0
difference = 0
angle_to_enemy = 0
dy = 0
dx = 0
spooper_spores = False
spooper: Sprite = None
spooper_room = 0
can_mansion = False
monster3: Sprite = None
head_cooldown = False
demon_lines: List[str] = []
specimen11: Sprite = None
door_invisible: Sprite = None
demon_chase = False
specimen_4: Sprite = None
ringu_chase = False
specimen_5: Sprite = None
bab_chase = False
unknownspecimen2: Sprite = None
cow_chase = 0
monster5: Sprite = None
apparition_hanged_man: TextSprite = None
hanged_chase = 0
hanged_man_announcement: List[str] = []
monster4: Sprite = None
hanged_observed = 0
gel_spawn: Sprite = None
goop_chase = False
goop_puddle: Sprite = None
specimen2: Sprite = None
water_where: Sprite = None
player_on_crate = False
siren_rooms: List[tiles.TileMapData] = []
siren_chase = 0
specimen13: Sprite = None
siren_cooldown = False
data_reset_confirmation = ""
message_toggle = 0
volume_save = 0
settings_menu: Sprite = None
exit_key = False
face_speed = 0
face_chase = False
unknownspecimen1: Sprite = None
face_cooldown = False
jumpscare: Sprite = None
old_man_check = False
man_wander_target: Sprite = None
ringu_cooldown = False
gel_cooldown = False
library_key = False
bag_chase = 0
monster2: Sprite = None
bag_cooldown = False
hanged_cooldown = False
otto_chase = False
game_active = False
parasite_chase = False
parasite_cooldown = False
shadow_animal: Sprite = None
unknownspecimen4: Sprite = None
gooped = False
lisa_chase = 0
unknownspecimen5: Sprite = None
lisa_appear = False
lisa_cooldown = False
lisa_observed = 0
specimen7: Sprite = None
wall_rooms: List[tiles.TileMapData] = []
roomRandom: List[tiles.TileMapData] = []
tirsiak_cooldown = False
otto_cooldown = False
stamina_use = False
axe_weapon: Sprite = None
canFight = False
yF = 0
xF = 0
stunned_ben: Sprite = None
parlor_key = False
specimen1: Sprite = None
parasite_form = 0
specimen10: Sprite = None
parasite_form_until_hit = False
woormy_charles_doll: Sprite = None
charles_chase = 0
charles_appear = False
charles_cooldown = False
charles_gets_hit = False
charles_health = 0
stunned_bug: Sprite = None
husks_doll: Sprite = None
bekka_chase = 0
monster6: Sprite = None
bekka_appear = False
bekka_cooldown = False
death_quote_position = ""
specimen12: Sprite = None
old_man_found = False
man_cooldown = False
old_man_stamina = 0
victorian_room_number = 0
husks_cooldown = False
deer_lines: List[str] = []
ring_deer: Sprite = None
specimen8: Sprite = None
deer_chase = False
deer_cooldown = False
partbug3: Sprite = None
partbug2: Sprite = None
partbug1: Sprite = None
bug_chase = False
specimen_3: Sprite = None
stamina_bar: StatusBarSprite = None
idle_timer = 0
bab_cooldown = False
death_quotes: List[str] = []
book_secret = False
victorian_mansion: List[tiles.TileMapData] = []
bedroom_key = False
bug_cooldown = False
hooked_chase = 0
hooked_doll: Sprite = None
hooked_cooldown = False
cow_cooldown = False
monster1: Sprite = None
mySprite: Sprite = None
TOTAKETHEDEAD: Sprite = None
guard_cooldown = False
kill_credit = ""
health_player: StatusBarSprite = None
demon_cooldown = False
ben_chase = False
specimen_6: Sprite = None
ben_cooldown = False
settings_check()
color.start_fade(color.black, color.original_palette, 100)
scene.set_background_image(img("""
    fffffffffffffffffffffffffffffffffffcfffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffcccccccffffcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffcccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffcccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffccccccccccceeccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffcccceeeeeeeeeeeeeeeeeeeccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffcceeeeeeebbbbbbbbeeeeeeeeeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffcbbbbbbbbbbbbbbbbbbbbbeeeeeccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffccbbbbbbbbbbbbbbbbbbbbbbbbbeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbeecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffccbddbbbbbbbbbbbbbbbbbbbbbbbeecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffccbddddddddddddbbbbbbbbbbbbbbbccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffccbdddddddddddddddbbbbbbbbbbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffccbdddddddddddddddddddddbbbbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffcfcbddddddddddddddddddddddddbbbbeccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffcbdddddddddddddddddddddddbbbb7ecccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffcffcbdddddddddddddddddddddbbbbb7ccffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffccccbbbbbddddddddddddddbbbbbbbeccfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffcccccbbbbbbbddddddddddbbbbbbeccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffcccbbbbbbbbbddddbbbbbbeeeeecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffcccbbbbbbbbbbbbbbbbbeeeeeccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffceeeeebbbbbbbbbbbeeeeeecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffcccceeeebbbbbeeeecccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffccccccceeeeccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffcccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffceccccfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbeccccfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcecfffcffcffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffcfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffccfcffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffcffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffffcffcfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffcffcfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffcffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffcffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbffffffffffffffffffcccfffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffccccfffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffcccffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcffffffffffffcccffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffbefffcfffffffcfcffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffdbfffcfffffffcffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcdbfffcffffffccccffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcddfffcffffffffccfccfffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcddfffcfffffffffcffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcdbfffcfffffffffcffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffbcfffcffffffffffcfffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffcffffffffffcfffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcfffffffffcfffffffffffcffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcfffffffffffffffffffffcffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffcfffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffcfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffcffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffcccccccffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffcccccccccffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffccccccccccccfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbffffffffffff7cfffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffbffcdffffffffffffdcfffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffcdffcdcffffffffffcdbfffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffcfffffffedcfcdeffffffffffcdbfffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffbcffffffedcfedcffffffffffcdbfffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffbbffffffedcfedcffffffffffcdbfffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffdbffffffedcfedcffffffffffcbcfffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffddffffffedcfedeffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcfffffddffffffedefebeffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffffcbbffffffeecffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffcccccfffffffffffffffffffffffffffffffffffffffffffc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffccceeebbbbbbbcffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffcfccee77bbbbbbb77eeccccffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffcfceeeeeeecccccffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccfffcffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffcfffcffffffffffffffcffffffffcbfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffcfcfffcfcffffffffffffcffffffffedffffffffffffffffbffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcbfcfffcfbefffffffffffcffffffffbdfffffffffffffffcdefffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffedfcfffcfbbfffffffffffcffffffffddfffffffffffffffedefffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffbdfcfffcfdbfffffffffffcffffffffddfffffffffffffffedefffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffbdfcfffcfdbfffffffffffcffffffffddfffffffffffffffed7fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffbdfcfffcfdbfffffffffffcffffffffbbfffffffffffffffedbfffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffbbfcfffcfbbfffffffffffcfffffffffffffffffffffffffcccffffffffffffffffffc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffcfffcfcffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffcfffcffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffcfffcffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffcfffcffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffcffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffcffffffffffffffccffccccffffffffffccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccffcbccccffffccccccffbbeffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccffffffffebccfffffffffffffcbbeffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffb7ccffffffffffffcbbbeffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffbbecffcccccccccffebbefffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffcbeecfffffffffffffbbecfffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffbbeefffffffffffffeb7cffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffcbeefffffffffffffcbbccffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbeeffccccfffffffcbeefffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbeeecccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccceeeeeeeeeeecccfffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccceeeeeeeeeeeeeeeccffffffffffffffffffffffffffffffffffffffffffffffffffff
    """))
title = textsprite.create("Longlinh's SJM")
title2 = textsprite.create("ENDLESS MODE RECREATION")
title.set_icon(img("""
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
    """))
title.set_position(54, 10)
title2.set_position(78, 21)
title.set_outline(1, 10)
title2.set_outline(1, 2)
tile_menu = miniMenu.create_menu(miniMenu.create_menu_item("Play",
        img("""
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
            """)),
    miniMenu.create_menu_item("Settings",
        img("""
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
            """)),
    miniMenu.create_menu_item("Extra",
        img("""
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
            """)))
tile_menu.set_position(32, 80)
miniMenu.set_frame(tile_menu,
    img("""
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
        """))

def on_button_pressed_a2(selection2, selectedIndex2):
    if selectedIndex2 == 0:
        game_yes()
    elif selectedIndex2 == 1:
        settings_menu_()
    else:
        extra_menu()
    miniMenu.close(tile_menu)
miniMenu.on_button_pressed(tile_menu, miniMenu.Button.A, on_button_pressed_a2)

def on_on_update():
    if game_active:
        if health_player.value <= 0:
            health_player.value += -10000
            controller.move_sprite(mySprite, 0, 0)
            death_message()
            game.game_over(False)
        if health_player.value <= 99 and not (health_player.value <= 0):
            if spooper_spores == False:
                health_player.value += 0.06
        else:
            controller.move_sprite(mySprite, 0, 0)
game.on_update(on_on_update)

def on_on_update2():
    global stamina_use
    if game_active:
        if not (health_player.value <= 0):
            if stamina_use:
                stamina_bar.value += -1
                if gooped:
                    controller.move_sprite(mySprite, 60, 60)
                else:
                    controller.move_sprite(mySprite, 180, 180)
            else:
                stamina_bar.value += 0.5
                if gooped:
                    controller.move_sprite(mySprite, 20, 20)
                else:
                    controller.move_sprite(mySprite, 100, 100)
            if stamina_bar.value <= 0:
                stamina_bar.value = -1
                stamina_use = False
                if gooped:
                    controller.move_sprite(mySprite, 20, 20)
                else:
                    controller.move_sprite(mySprite, 100, 100)
game.on_update(on_on_update2)

def on_on_update3():
    global dx, dy, angle_to_enemy, difference, ben_visible
    if ben_chase:
        dx = specimen_6.x - mySprite.x
        dy = specimen_6.y - mySprite.y
        angle_to_enemy = Math.atan2(dy, dx)
        difference = abs(spriteutils.radians_to_degrees(angle_to_enemy) - looking_direction)
        if difference > 180:
            difference = 360 - difference
        if difference <= 75:
            ben_visible = True
            tiles.place_on_tile(specimen_6, specimen_6.tilemap_location())
            scene.follow_path(specimen_6,
                scene.a_star(specimen_6.tilemap_location(), specimen_6.tilemap_location()),
                0)
        else:
            ben_visible = False
game.on_update(on_on_update3)

def on_on_update4():
    global yF, xF
    if game_active:
        if controller.up.is_pressed():
            yF = -1
        elif controller.down.is_pressed():
            yF = 1
        else:
            yF = 0
        if controller.left.is_pressed():
            xF = -1
        elif controller.right.is_pressed():
            xF = 1
        else:
            xF = 0
game.on_update(on_on_update4)

def on_on_update5():
    global dxhanged, dyhanged, hanged_difference
    if hanged_chase:
        monster4.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
        dxhanged = monster4.x - mySprite.x
        dyhanged = monster4.y - mySprite.y
        hanged_difference = abs(spriteutils.radians_to_degrees(Math.atan2(dyhanged, dxhanged)) - looking_direction)
game.on_update(on_on_update5)

def on_on_update6():
    global parasite_form, parasite_form_until_hit
    if parasite_form_until_hit:
        if spriteutils.distance_between(mySprite, specimen10) >= 75:
            parasite_form = 2
        elif spriteutils.distance_between(mySprite, specimen10) < 75 and spriteutils.distance_between(mySprite, specimen10) > 35:
            parasite_form = 1
        else:
            parasite_form = 0
        if parasite_form == 0:
            specimen10.set_image(img("""
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
                """))
        elif parasite_form == 1:
            specimen10.set_image(img("""
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
                """))
        else:
            parasite_form_until_hit = False
            specimen10.set_image(img("""
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
                """))
game.on_update(on_on_update6)

def on_on_update7():
    global dxhooked, dyhooked, hooked_difference
    if hooked_chase:
        hooked_doll.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
        dxhooked = hooked_doll.x - mySprite.x
        dyhooked = hooked_doll.y - mySprite.y
        hooked_difference = abs(spriteutils.radians_to_degrees(spriteutils.angle_from(mySprite, hooked_doll)) - looking_direction)
        if hooked_chase:
            if hooked_difference <= 45:
                hooked_doll.follow(mySprite, 140)
            elif hooked_difference <= 75:
                hooked_doll.follow(mySprite, 40)
            elif hooked_difference > 75:
                hooked_doll.follow(mySprite, 0)
game.on_update(on_on_update7)

def on_on_update8():
    if hooked_cooldown:
        pass
game.on_update(on_on_update8)

def on_on_update9():
    global old_man_found
    if old_man_check:
        if not (mySprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
            myTile13
            """))):
            old_man_found = True
game.on_update(on_on_update9)

def on_on_update10():
    global hanged_observed, hanged_difference
    if hanged_chase:
        if hanged_difference <= 75:
            monster4.follow(mySprite, 0)
            hanged_observed += -1
        elif hanged_difference > 75:
            monster4.follow(mySprite, 250)
            hanged_difference = 150
        if hanged_observed <= 0:
            hanged_observed = 150
            spriteutils.place_angle_from(monster4, randint(0, 359), randint(130, 160), mySprite)
game.on_update(on_on_update10)

def on_on_update11():
    global old_man_stamina
    if old_man_stamina <= 100 and old_man_stamina > 0:
        old_man_stamina += -1
    elif old_man_stamina <= 0:
        pass
game.on_update(on_on_update11)

def on_on_update12():
    pass
game.on_update(on_on_update12)

def on_on_update13():
    global player_on_crate
    if siren_chase:
        if mySprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
            myTile47
            """)):
            player_on_crate = True
        else:
            player_on_crate = False
game.on_update(on_on_update13)

def on_on_update14():
    global dxlisa, dylisa, angle_to_lisa, lisa_difference, lisa_observed
    if lisa_chase:
        unknownspecimen5.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
        dxlisa = unknownspecimen5.x - mySprite.x
        dylisa = unknownspecimen5.y - mySprite.y
        angle_to_lisa = 0
        lisa_difference = abs(spriteutils.radians_to_degrees(Math.atan2(dylisa, dxlisa)) - looking_direction)
        if lisa_appear:
            if lisa_difference <= 75:
                unknownspecimen5.follow(mySprite, 0)
                lisa_observed += -1
                animation.run_image_animation(unknownspecimen5,
                    [img("""
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
                            """),
                        img("""
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
                            """),
                        img("""
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
                            """),
                        img("""
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
                            """)],
                    50,
                    True)
            else:
                unknownspecimen5.follow(mySprite, 210)
                lisa_observed = 70
            if lisa_observed <= 0:
                lisa_observed = 0
                animation.run_image_animation(unknownspecimen5,
                    [img("""
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
                        """)],
                    50,
                    True)
game.on_update(on_on_update14)

def on_on_update15():
    global bekka_appear
    if bekka_chase:
        if bekka_appear:
            if spriteutils.distance_between(mySprite, monster6) <= 50:
                bekka_appear = False
                monster6.set_image(img("""
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
                    """))
                monster6.follow(mySprite, 72)
                
                def on_after65():
                    monster6.set_image(img("""
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
                        """))
                timer.after(randint(500, 800), on_after65)
                
game.on_update(on_on_update15)

def on_update_interval():
    global gooped
    if game_active:
        if not (mySprite.overlaps_with(goop_puddle)):
            gooped = False
game.on_update_interval(50, on_update_interval)

def on_update_interval2():
    if bab_chase:
        scene.follow_path(specimen_5,
            scene.a_star(specimen_5.tilemap_location(), mySprite.tilemap_location()),
            75)
        color.rotate_palette.start_screen_effect(250)
        if Math.percent_chance(50):
            scene.set_background_image(img("""
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
                """))
        else:
            scene.set_background_image(img("""
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
                """))
game.on_update_interval(250, on_update_interval2)

def on_update_interval3():
    global door_invisible
    if demon_chase:
        door_invisible = sprites.create(img("""
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
                """),
            SpriteKind.enemy)
        door_invisible.set_image(img("""
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
            """))
        tiles.place_on_random_tile(door_invisible, assets.tile("""
            myTile1
            """))
        
        def on_after66():
            global door_invisible
            door_invisible = sprites.create(img("""
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
                    """),
                SpriteKind.enemy)
            tiles.place_on_random_tile(door_invisible, assets.tile("""
                myTile1
                """))
            door_invisible.set_image(img("""
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
                """))
        timer.after(randint(5500, 6500), on_after66)
        
game.on_update_interval(7000, on_update_interval3)

def on_update_interval4():
    if goop_chase:
        scene.follow_path(specimen2,
            scene.a_star(specimen2.tilemap_location(), mySprite.tilemap_location()),
            100)
game.on_update_interval(260, on_update_interval4)

def on_update_interval5():
    if game_active:
        if old_man_stamina > 0:
            scene.follow_path(specimen12,
                scene.a_star(specimen12.tilemap_location(), mySprite.tilemap_location()),
                60)
game.on_update_interval(350, on_update_interval5)

def on_update_interval6():
    global face_speed
    if face_cooldown == False and face_chase:
        spriteutils.place_angle_from(unknownspecimen1,
            randint(0, 360),
            randint(120, 140),
            mySprite)
        face_speed = 0
game.on_update_interval(5700, on_update_interval6)

def on_update_interval7():
    global idle_timer
    if game_active:
        if mySprite.vx == 0 and mySprite.vy == 0:
            idle_timer += -1
        if idle_timer == 0:
            taker()
game.on_update_interval(1000, on_update_interval7)

def on_update_interval8():
    if spooper_spores:
        health_player.value += -0.2
game.on_update_interval(1000, on_update_interval8)

def on_update_interval9():
    if parasite_chase:
        if parasite_form == 0:
            scene.follow_path(specimen10,
                scene.a_star(specimen10.tilemap_location(), mySprite.tilemap_location()),
                50)
        elif parasite_form == 1:
            scene.follow_path(specimen10,
                scene.a_star(specimen10.tilemap_location(), mySprite.tilemap_location()),
                60)
game.on_update_interval(400, on_update_interval9)

def on_update_interval10():
    if cow_chase:
        scene.follow_path(monster5,
            scene.a_star(monster5.tilemap_location(), mySprite.tilemap_location()),
            115)
game.on_update_interval(400, on_update_interval10)

def on_forever():
    global angle, looking_direction, lastYF, lastXF, angle2, angle3, angle4
    if game_active:
        if not (controller.B.is_pressed()):
            if xF == 0 and yF == 0:
                angle = Math.atan2(lastYF, lastXF) * (180 / Math.PI)
                multilights.flashlight_source_attached_to(mySprite).direction = angle
                looking_direction = angle
            else:
                lastYF = yF
                lastXF = xF
                angle2 = Math.atan2(yF, xF) * (180 / Math.PI)
                multilights.flashlight_source_attached_to(mySprite).direction = angle2
                looking_direction = angle2
        else:
            # B is pressed
            if xF == 0 and yF == 0:
                angle3 = 180 + Math.atan2(lastYF, lastXF) * (180 / Math.PI)
                # NORMALIZE HERE
                angle3 = (angle3 % 360 + 360) % 360
                multilights.flashlight_source_attached_to(mySprite).direction = angle3
                looking_direction = angle3
            else:
                lastYF = yF
                lastXF = xF
                angle4 = 180 + Math.atan2(yF, xF) * (180 / Math.PI)
                # NORMALIZE HERE
                angle4 = (angle4 % 360 + 360) % 360
                multilights.flashlight_source_attached_to(mySprite).direction = angle4
                looking_direction = angle4
forever(on_forever)

def on_update_interval11():
    global face_speed
    if face_chase:
        if face_speed < 6:
            face_speed += 1
            unknownspecimen1.follow(mySprite, face_speed * 20)
        elif face_speed == 6:
            face_speed = 6
            unknownspecimen1.follow(mySprite, face_speed * 20)
game.on_update_interval(900, on_update_interval11)

def on_update_interval12():
    if otto_chase:
        scene.follow_path(unknownspecimen2,
            scene.a_star(unknownspecimen2.tilemap_location(),
                mySprite.tilemap_location()),
            70)
game.on_update_interval(380, on_update_interval12)

def on_update_interval13():
    if bag_chase:
        scene.follow_path(monster2,
            scene.a_star(monster2.tilemap_location(), mySprite.tilemap_location()),
            140)
game.on_update_interval(500, on_update_interval13)

def on_update_interval14():
    if charles_chase:
        if charles_appear:
            scene.follow_path(woormy_charles_doll,
                scene.a_star(woormy_charles_doll.tilemap_location(),
                    mySprite.tilemap_location()),
                200)
game.on_update_interval(500, on_update_interval14)

def on_update_interval15():
    if ben_chase:
        if ben_visible:
            tiles.place_on_tile(specimen_6, specimen_6.tilemap_location())
            scene.follow_path(specimen_6,
                scene.a_star(specimen_6.tilemap_location(), specimen_6.tilemap_location()),
                0)
        else:
            scene.follow_path(specimen_6,
                scene.a_star(specimen_6.tilemap_location(), mySprite.tilemap_location()),
                200)
game.on_update_interval(100, on_update_interval15)

def on_update_interval16():
    if parasite_chase:
        if parasite_form == 2:
            scene.follow_path(specimen10,
                scene.a_star(specimen10.tilemap_location(), mySprite.tilemap_location()),
                200)
game.on_update_interval(100, on_update_interval16)

def on_update_interval17():
    if old_man_found:
        specimen12.say_text("")
        scene.follow_path(specimen12,
            scene.a_star(specimen12.tilemap_location(), mySprite.tilemap_location()),
            200)
game.on_update_interval(100, on_update_interval17)

def on_update_interval18():
    global old_man_stamina
    if game_active:
        if old_man_stamina <= 0:
            scene.follow_path(specimen12,
                scene.a_star(specimen12.tilemap_location(), mySprite.tilemap_location()),
                200)
            old_man_stamina = 3
game.on_update_interval(100, on_update_interval18)

def on_update_interval19():
    if bug_chase:
        scene.follow_path(specimen_3,
            scene.a_star(specimen_3.tilemap_location(), mySprite.tilemap_location()),
            140)
game.on_update_interval(300, on_update_interval19)

def on_update_interval20():
    global old_man_lines
    if old_man_check:
        old_man_lines = ["Are you in here...?",
            "Come out, come out!",
            "I can smell you.",
            "I hear you.",
            "I'm so lonely...",
            "Where... are you?",
            "You'll like being dead. I promise.",
            "You're wasting both our time."]
        specimen12.say_text(old_man_lines._pick_random())
game.on_update_interval(4500, on_update_interval20)
