import React, { Suspense, lazy } from 'react';

import { cssBind } from '@toolkit/helper/cssUtils';
import Dropdown from '@components/Dropdowns/Dropdown/index';
import OldDropdown, { DropdownItem } from '@components/Dropdowns/OldDropdown';
import Panel from '@components/Panel';
import OldPanel from '@components/Panel/OldPanel/OldPanel';

import styles from './App.scss';

const css = cssBind(styles);

const dropdownItems: DropdownItem[] = [
    {
        id: 0,
        text: 'hello',
        onClick: () => console.log('hello'),
    },
    {
        id: 1,
        text: 'world',
        onClick: () => console.log('world'),
    },
    {
        id: 2,
        text: 'foo',
        onClick: () => console.log('foo'),
    },
    {
        id: 3,
        text: 'bar',
        onClick: () => console.log('bar'),
    },
];

const App = (): JSX.Element => (
    <div className={css('root')}>
        Hello, Hackbuddies!
        <div className={css('dropdowns')}>
            <Dropdown onSelect={(item?: JSX.Element | string) => console.log(item)}>
                <Dropdown.Item
                    onClick={(): void => console.log('hello')}
                    value="hello"
                >
                    hello
                </Dropdown.Item>
                <Dropdown.Item>
                    world
                </Dropdown.Item>
                <Dropdown.Item>
                    foo
                </Dropdown.Item>
                <Dropdown.Item>
                    bar
                </Dropdown.Item>
            </Dropdown>
            <OldDropdown items={dropdownItems} />
        </div>
        <div className={css('panels')}>
            <OldPanel
                title="Header"
                footer="Footer"
            >
                Body
            </OldPanel>
            <Panel>
                <Panel.Header>
                    Header
                </Panel.Header>
                <Panel.Body className={css('body')}>
                    Body
                </Panel.Body>
                <Panel.Header>
                    Header
                </Panel.Header>
                <Panel.Body className={css('body')}>
                    Body
                </Panel.Body>
                <Panel.Footer>
                    Footer
                </Panel.Footer>
            </Panel>
            <Panel />
        </div>
    </div>
);

export default App;
