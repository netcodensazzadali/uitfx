import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

// Disable SSR for SymbolOverview
const SymbolOverview = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((mod) => mod.SymbolOverview),
  { ssr: false }
);

const CurrencyConverterWidget = () => {
  const [isClient, setIsClient] = useState(false);

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [conversionRate, setConversionRate] = useState(0.95); // Mock conversion rate
  const [result, setResult] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleConvert = () => {
    const calculatedResult = amount * conversionRate;
    setResult(calculatedResult.toFixed(2));
  };

  if (!isClient) return null;

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xxl="7">
          <Card className="p-4 shadow">
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                  Amount
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                  From
                </Form.Label>
                <Col sm="8">
                  <Form.Select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                  To
                </Form.Label>
                <Col sm="8">
                  <Form.Select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" onClick={handleConvert}>
                  Convert
                </Button>
              </div>
            </Form>
            {result > 0 && (
              <div className="text-center mt-3">
                <h4>
                  Result:{" "}
                  <strong>
                    {result} {toCurrency}
                  </strong>
                </h4>
              </div>
            )}
          </Card>
        </Col>

        <Col xxl="7">
          <Card className="mt-4 p-2">
            <SymbolOverview
              symbols={[
                ["FX:EURUSD", "EUR/USD"],
                ["FX:USDJPY", "USD/JPY"],
              ]}
              colorTheme="light"
              autosize
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrencyConverterWidget;
