type PossibleSignUpProps = {
  id: string;
  pwd: string;
  nickname: string;
  isExit: boolean;
  onDuplicate: boolean;
};

export const setPossibleSignup = ({
  id,
  pwd,
  nickname,
  isExit,
  onDuplicate,
}: PossibleSignUpProps) => {
  if (id === '' || pwd === '' || nickname == '' || isExit === true || onDuplicate === false) {
    return 'NEGATIVE';
  } else if (!onDuplicate) {
    return 'DEFAULT';
  } else {
    return 'POSITIVE';
  }
};
