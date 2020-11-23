import React from "react";

declare namespace JSX {
    interface IntrinsicElements {
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
        'color-match': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
}