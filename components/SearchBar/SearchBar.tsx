import { Inter } from 'next/font/google';
import { IoSearchOutline } from 'react-icons/io5';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

interface IFormInput {
  q: string;
}

const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    left: 16px;
  }
`;

const StyledInput = styled.input`
  text-indent: 48px;
  height: 40px;
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.neutral[500]};
  border-radius: 6px;

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    border-width: 2px;
  }
`;

const inter = Inter({ weight: '400', subsets: ['latin'] });

export function SearchBar() {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (formData) => {
    // TODO: Wire up with elastic
    console.log(formData);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <IoSearchOutline size={20} />
      <StyledInput className={inter.className} {...register('q')} autoComplete="off" />
    </StyledForm>
  );
}
