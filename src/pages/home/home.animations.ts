import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const onBoardingAnimations = [
    trigger('bounceInDown', [
        transition('void => *', [
            animate(800, keyframes([
                style({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateY(35px)', offset: .7 }),
                style({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
            ]))
        ])
    ]),
    trigger('slideInLeft', [
        transition('void => *', [
            animate(800, keyframes([
                style({ opacity: 0, transform: 'translateX(-200px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
            ]))
        ])
    ]),
    trigger('slideInRight', [
        transition('void => *', [
            animate(800, keyframes([
                style({ opacity: 0, transform: 'translateX(400px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
            ]))
        ])
    ]),
    trigger('fadeIn', [
        transition('void => *', [
            animate(1000, keyframes([
                style({ opacity: 0, offset: 0 }),
                style({ opacity: 0, offset: .5 }),
                style({ opacity: .5, offset: .7 }),
                style({ opacity: 1, offset: 1 })
            ]))
        ])
    ])
]