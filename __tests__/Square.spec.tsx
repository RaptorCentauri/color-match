import Square from '../src/app/components/Square/Square'
import { AppProvider } from '../src/app/contextAndProvider';
import * as React from 'react';
import { render, cleanup} from "@testing-library/react";
import 'jest-dom/extend-expect'


afterEach(cleanup)

describe('The Square component', () => {
      test('should be visible',()=>{
        const { container } = render(
          <AppProvider>
            <Square value='' id='' />
          </AppProvider>
        );
        const parent = container.querySelector('colored-square');

        expect(parent).toBeVisible;
    });
})
