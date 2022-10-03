import { useState, Dispatch, ChangeEvent, ElementType } from 'react';

import { Button, Text } from '@/components/common';
import { Caution } from '@/components/common/Caution';
import {
  CautionMessage,
  CautionContent,
} from '@/components/common/Caution/types';
import { Logo } from '@/components/common/Logo';
import { UserInput, UserInputProps } from '@/components/common/UserInput';
import { useAddressApi } from '@/hooks/useAddressApi';
import * as S from '@/Pages/Login/Signin.style';
import {
  idValid,
  nameValid,
  passwordValid,
  confirmPasswordValid,
} from '@/service/login';

const onChangeInput =
  (setterFunc: Dispatch<string>) => (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setterFunc(value);
  };

const ID = '아이디';
const PASSWORD = '비밀번호';

export function SignIn() {
  const { reset, addressControll, address, setDetailAddress } = useAddressApi();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  // const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [postNum, setPostNum] = useState('');

  const idErrorMessages = idValid(id);
  const passwordErrorMessages = passwordValid(password);
  const nameErrorMessges = nameValid(name);
  const confirmPasswordErrorMessages = confirmPasswordValid({
    first: password,
    second: passwordConfirm,
  });

  const onChangeID = onChangeInput(setId);
  const onChangePassword = onChangeInput(setPassword);
  const onChangeConfirmPassword = onChangeInput(setPasswordConfirm);
  const onChangeName = onChangeInput(setName);
  // const onChangeAddress = onChangeInput(setAddress);
  const onChageAddressDetail = onChangeInput(setAddressDetail);
  const onChangePostNum = onChangeInput(setPostNum);
  return (
    <S.Layout>
      <S.SignInSection>
        <Logo size="small" />

        <SignInInput
          inputProps={{
            size: 'large',
            iconSrc: 'PERSON',
            placeholder: ID,
            onChange: onChangeID,
          }}
          cautionContent={ID}
          inputErrorMessages={idErrorMessages}
        />
        <S.PasswordsLayout>
          <SignInInput
            inputProps={{
              size: 'medium',
              iconSrc: 'LOCK',
              placeholder: PASSWORD,
              onChange: onChangePassword,
            }}
            inputErrorMessages={passwordErrorMessages}
          />

          <SignInInput
            inputProps={{
              size: 'medium',
              placeholder: '비밀번호 재입력',
              onChange: onChangeConfirmPassword,
            }}
            inputErrorMessages={confirmPasswordErrorMessages}
          />
        </S.PasswordsLayout>

        <SignInInput
          inputProps={{
            size: 'small',
            placeholder: '이름',
            onChange: onChangeName,
          }}
          inputErrorMessages={nameErrorMessges}
        />

        <UserInput
          size="large"
          placeholder="주소"
          onClick={addressControll}
          value={address.address1}
          style={{ caretColor: 'transparent' }}
        />
        <UserInput size="large" placeholder="상세주소" />
        <UserInput size="small" placeholder="우편번호" disabled />

        <S.BtnLayout>
          <Button>
            <Text>회원 가입 완료</Text>
          </Button>
        </S.BtnLayout>
      </S.SignInSection>

      <S.Introduce />
    </S.Layout>
  );
}

function SignInInput<incomeElements extends ElementType = 'input'>({
  inputProps,
  cautionContent,
  inputErrorMessages,
}: {
  inputProps: UserInputProps<incomeElements>;
  cautionContent?: CautionContent;
  inputErrorMessages: (CautionMessage | false)[];
}) {
  const [isInputBlur, setIsInputBlur] = useState(false);
  const onFocusInput = () => {
    setIsInputBlur(true);
  };

  const onBlurInput = () => {
    setIsInputBlur(false);
  };

  const inputCaution = inputErrorMessages.map(
    inputError =>
      isInputBlur &&
      inputError && <Caution content={cautionContent} message={inputError} />,
  );

  return (
    <>
      <UserInput
        {...inputProps}
        onFocus={onFocusInput}
        onBlurInput={onBlurInput}
      />
      {inputCaution}
    </>
  );
}
