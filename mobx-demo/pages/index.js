import Display from "../components/Display";
import Controller from "../components/Controller";
import SelfObserve from "../components/SelfObserve";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <SelfObserve/>
      <Display/>
      <Controller/>
    </div>
  )
}
