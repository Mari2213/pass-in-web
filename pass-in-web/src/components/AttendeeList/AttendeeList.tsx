import { Col, Container, Form, Image, Row, Table } from "react-bootstrap";
import icon from "../../assets/svgs/seach.svg";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";

const AttendeeList = () => {
  return (
    <Container className="text-center">
      <Row className="g-0 me-auto fs-5 fw-bold text-light">
        Participantes
        <Col sm="2" className="ps-3">
          <Form className="d-inline-flex border border-black rounded rounded-1">
            <Image src={icon} className="w-auto ps-1" />
            <Form.Control
              className="bg-secondary border border-0 text-light shadow-none"
              size="sm"
              type="text"
              placeholder="Buscar participante..."
            />
          </Form>
        </Col>
      </Row>
      <Row className="w-auto mt-3">
        <Table variant="dark" className="w-100 h-auto">
          <thead>
            <tr>
              <th className="fs-6 fw-semibold">
                <input
                  type="checkbox"
                  className="form-check-input bg-secondary"
                />
              </th>
              <th className="fs-6 fw-semibold">Código</th>
              <th className="fs-6 fw-semibold">Participante</th>
              <th className="fs-6 fw-semibold">Data de inscrição</th>
              <th className="fs-6 fw-semibold">Data do check-in</th>
              <th style={{ width: 64 }} className="fs-6 fw-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map(() => {
              return (
                <tr>
                  <td className="fs-6">
                    <input
                      type="checkbox"
                      className="form-check-input bg-secondary"
                    />
                  </td>
                  <td className=" fs-6">12345</td>
                  <td className=" fs-6">
                    <div className="d-flex flex-column ">
                      <span className="fw-bold fs-6">
                        Diogo Schell Fernandes
                      </span>
                      <span className="fw-light">diogo@rockeseat.com.br</span>
                    </div>
                  </td>
                  <td className="fs-6">7 dias atrás</td>
                  <td>3 dias atrás</td>
                  <td>
                    <button className="bg-black border border-white rounded">
                      <MoreHorizontal className="text-white" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-start" colSpan={3}>
                Mostrando 10 de 228 itens
              </td>
              <td className="text-end p-2" colSpan={3}>
                <span className="mx-3">Página 1 de 25</span>
                <div className="d-inline-flex gap-1">
                  <button className="bg-black border border-white rounded">
                    <ChevronsLeft className="text-white" />
                  </button>
                  <button className="bg-black border border-white rounded">
                    <ChevronLeft className="text-white" />
                  </button>
                  <button className="bg-black border border-white rounded">
                    <ChevronRight className="text-white" />
                  </button>
                  <button className="bg-black border border-white rounded">
                    <ChevronsRight className="text-white" />
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </Table>
      </Row>
    </Container>
  );
};

export default AttendeeList;
