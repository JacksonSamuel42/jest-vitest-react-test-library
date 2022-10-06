import React from 'react';
import { SkillsProps } from './skills.types';

const Skills = (props: SkillsProps) => {
    const {skills} = props;
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoggedIn(true)
		}, 500);
	}, [])

	return (
		<>
			<ul>
				{skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
            {isLoggedIn ? (
                <button>Start learning</button>
            ): (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
		</>
	);
};

export default Skills;
