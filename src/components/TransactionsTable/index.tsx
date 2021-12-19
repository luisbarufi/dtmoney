import { Container } from "./styles";

export function TransactionsTable() {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Cateroria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12000,00</td>
            <td>Desenvimento</td>
            <td>19/12/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$ 1100,00</td>
            <td>Casa</td>
            <td>17/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
