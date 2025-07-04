import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { Input } from './input';
import type { InputProps } from './input';

const PasswordInput: React.FC<InputProps> = ({ ...props }) => {
	const [show, setShow] = React.useState(false);

	const toggleShow = () => {
		setShow(!show);
	};

	return (
		<Input
			{...props}
			type={show ? 'text' : 'password'}
			icon={
				<span onClick={toggleShow} className='text-secondary/60 cursor-pointer'>
					{show ? <Eye className='size-4' /> : <EyeOff className='size-4' />}
				</span>
			}
			iconPosition='right'
		/>
	);
};

export { PasswordInput };
