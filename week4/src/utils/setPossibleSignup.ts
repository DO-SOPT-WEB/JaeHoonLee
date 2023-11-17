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
  console.log(`id: ${id}`);
  console.log(`pwd: ${pwd}`);
  console.log(`nickname: ${nickname}`);
  console.log(`iisExitd: ${isExit}`);
  console.log(`onDuplicate: ${onDuplicate}`);
  if (id !== '' && pwd !== '' && nickname !== '' && !isExit && onDuplicate) {
    return 'POSITIVE';
  } else {
    return 'NEGATIVE';
  }
};
