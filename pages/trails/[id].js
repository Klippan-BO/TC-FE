import { useRouter } from 'next/router';
import TrailPage from '../../components/Trails/index.js';

const Id = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <TrailPage id={id} />
    </>
  )
}

export default Id;