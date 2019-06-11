import Square from '../src/app/components/Square/Square'
import * as React from 'react';
import { render, cleanup} from "@testing-library/react";
import 'jest-dom/extend-expect'


afterEach(cleanup)

describe('The Square component', () => {
      test('should be visible',()=>{
        const { container} = render(<Square /> );
        const parent = container.querySelector('div');

        expect(parent).toBeVisible;
    });
})
