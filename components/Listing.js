// a simple listing component
export default function Listing({ network, id }) {
  return (<div
    data-widget="m-card-countdown"
    data-id={id}
    data-network={network}
  ></div>)
}
