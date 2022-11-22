const pay = function (id, amount, description) {
  // eslint-disable-next-line no-undef
  var widget = new pw.PayWidget();
  console.log('PAY');
  widget.pay(
    {
      // serviceId - Идентификатор ТСП
      serviceId: '20254',
      // key - public key из личного кабинета мерчанта
      key: '04fa96aa2cbdff996c10dcf3e01f8f027649c67a0339e63f856877598333f20b34700dc3f41f7838ff985eefde7b8d9582e7cdde5af2133b4952b4fd9bb2a63882',
    },
    // Запрос с минимальным количеством параметров
    {
      MetaData: {
        PaymentType: 'Pay',
      },
      PaymentRequest: {
        OrderId: new Date().getTime().toString(),
        Amount: `${amount}`.toString(),
        Currency: 'RUB',
        Description: `payment for product: ${description}`,
      },
    },
    // Запрос с максимальным количеством параметров
    // См. запрос Create
    {
      // Варианты ключей которые могут приходить по колбекам:
      // для onSuccess -> PAY_WIDGET:TRANSACTION_SUCCESS
      // для onError -> PAY_WIDGET:TRANSACTION_FAIL, PAY_WIDGET:CREATE_NETWORK_ERROR, PAY_WIDG:CREATE_BAD_REQUEST_ERROR
      onSuccess: function (res) {
        switch (id) {
          case 1:
            // eslint-disable-next-line no-undef
            PuzzleBot.sendCommand('Товар 1');
            break;
          case 2:
            // eslint-disable-next-line no-undef
            PuzzleBot.sendCommand('Товар 2');
            break;
          case 3:
            // eslint-disable-next-line no-undef
            PuzzleBot.sendCommand('Товар 3');
            break;
          case 4:
            // eslint-disable-next-line no-undef
            PuzzleBot.sendCommand('Товар 4');
            break;
          case 5:
            // eslint-disable-next-line no-undef
            PuzzleBot.sendCommand('Товар 5');
            break;
          case 6:
            // eslint-disable-next-line no-undef
            PuzzleBot.sendCommand('Товар 6');
            break;
          case 7:
            // eslint-disable-next-line no-undef
            PuzzleBot.sendCommand('Товар 7');
            break;
          case 8:
            // eslint-disable-next-line no-undef
            PuzzleBot.sendCommand('Товар 8');
            break;
          default:
            console.log(`Sorry, we are out of ${id}.`);
        }
      },
      onError: function (res) {
        console.log('onFail from shop', res);
      },
      onClose: function (res) {
        console.log('onClose from shop', res);
      },
    }
  );
};

export default pay;
