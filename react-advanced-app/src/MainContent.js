import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

export default function MainContent() {
    return (
        <div>
            <ThemeContextConsumer>
                {(context) => (
                    <div className={`content ${context.theme}`}>
                        <h1>Welcome to my app</h1>
                        <p>
                            Use context API to share data between components.
                        </p>
                    </div>
                )}
            </ThemeContextConsumer>
        </div>
    )
}
