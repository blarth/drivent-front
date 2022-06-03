import { Button } from './style';

export default function ButtonBox({ description, click }) {
  return <Button onClick={click}>{description}</Button>;
}
