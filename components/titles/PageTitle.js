import { Card } from "react-bootstrap";

const PageTitle = (props) => {
  return (
    <div className="pageTitle">
      <Card className="bg-transparent border-0">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>{props.subtitle}</Card.Subtitle>
          <Card.Text>{props.content}</Card.Text>
          <Card.Link
            href="https://my.uitfx.com/create-account"
            className="GlobalBtn"
          >
            Open Live Account
          </Card.Link>
          <Card.Link
            href="https://my.uitfx.com/create-account"
            className="GlobalBtn GlobalBtnOutline"
          >
            Try Demo Account
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PageTitle;
