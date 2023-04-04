import { Inter } from 'next/font/google';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

interface IFormInput {
  searchTerm: string;
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledInput = styled.input`
  text-indent: 40px;
  height: 40px;
  width: 100%;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.neutral[500]};
  border-radius: 4px;

  &:focus {
    outline: none;
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
      <StyledInput className={inter.className} {...register('searchTerm')} autoComplete="off" />
    </StyledForm>
  );
}
