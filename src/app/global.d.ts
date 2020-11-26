import * as React from "react";

declare module 'react' {
    interface HTMLAttributes<T> {
        class?: any
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'color-match': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'colored-square': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'game-board': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'title-bar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'title-name': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'score-box': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'current-score': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'current-level': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'game-over': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'play-again-btn': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'board-frame': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}


