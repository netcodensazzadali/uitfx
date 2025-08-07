"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

// Dynamically import SymbolOverview with SSR disabled
const SymbolOverview = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((mod) => mod.SymbolOverview),
  {
    ssr: false,
    loading: () => <p>Loading chart...</p>,
  }
);

const PipCalculatorWidget = () => {
  const [pipAmount, setPipAmount] = useState(100);
  const [instrument, setInstrument] = useState("EUR/USD");
  const [positionSize, setPositionSize] = useState(100000);
  const [pipValue, setPipValue] = useState(null);

  const calculatePipValue = () => {
    if (pipAmount <= 0 || positionSize <= 0) {
      setPipValue(null);
      return;
    }

    const divisor = instrument.includes("JPY") ? 100 : 10000;
    const result = (pipAmount * positionSize) / divisor;
    setPipValue(parseFloat(result.toFixed(2)));
  };

  return (
    <Row className="justify-content-center">
      <Col xxl={7}>
        <Card className="p-4 shadow">
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Pip Amount
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="number"
                  value={pipAmount}
                  onChange={(e) => setPipAmount(Number(e.target.value))}
                  min={1}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Instrument
              </Form.Label>
              <Col sm={8}>
                <Form.Select
                  value={instrument}
                  onChange={(e) => setInstrument(e.target.value)}
                >
                  <option value="EUR/USD">EUR/USD</option>
                  <option value="USD/JPY">USD/JPY</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Position Size
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="number"
                  value={positionSize}
                  onChange={(e) => setPositionSize(Number(e.target.value))}
                  min={1000}
                  step={1000}
                />
              </Col>
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" onClick={calculatePipValue}>
                Calculate
              </Button>
            </div>
          </Form>

          {pipValue !== null && (
            <div className="text-center mt-3">
              <h4>
                Pip Value: <strong>{pipValue} USD</strong>
              </h4>
            </div>
          )}
        </Card>
      </Col>

      <Col xxl={7}>
        <Card className="mt-4 p-2">
          <SymbolOverview
            symbols={[["FX:EURUSD", "EUR/USD"]]}
            colorTheme="light"
            autosize
          />
        </Card>
      </Col>
    </Row>
  );
};

export default PipCalculatorWidget;
