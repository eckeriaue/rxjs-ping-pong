import {noop, map, fromEvent, of, interval, combineLatest, noop} from 'rxjs'
import { pluck, startWith } from 'rxjs/operators'

const createGameObject = (x, y) => ({x, y})

const player$ = combineLatest(
        of({...createGameObject(gameSize / 2, (gameSize / 2) - 1), score: 0, lives: 3}),
        fromEvent(document, 'keyup').pipe(startWith({code: ''}), pluck('code'))
).pipe(
        map(([player, key]) => (
             key === 'ArrowLeft'
                ? player.y -= 1
                : noop
        ), player
      )
)