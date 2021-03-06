"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TableViewRow_1 = require("./../../poker.ui/src/shared/TableViewRow");
const ClientMessage_1 = require("./../../poker.ui/src/shared/ClientMessage");
const DataContainer_1 = require("./../../poker.ui/src/shared/DataContainer");
const protobuf_config_1 = __importDefault(require("./../../poker.ui/src/shared/protobuf-config"));
const login_request_1 = require("../../poker.ui/src/shared/login-request");
const signup_request_1 = require("../../poker.ui/src/shared/signup-request");
const forgot_request_1 = require("../../poker.ui/src/shared/forgot-request");
const TournmanetStatus_1 = require("../../poker.ui/src/shared/TournmanetStatus");
const tournmanet_view_row_1 = require("../../poker.ui/src/shared/tournmanet-view-row");
const TournamentInfoRequest_1 = require("../../poker.ui/src/shared/TournamentInfoRequest");
const TournamentResultView_1 = require("../../poker.ui/src/shared/TournamentResultView");
const NextBlind_1 = require("../../poker.ui/src/shared/NextBlind");
var assert = require('assert');
describe('serialization-fixture', () => {
    beforeEach(async () => {
        await protobuf_config_1.default.init();
    });
    it('protobuf_DataContainer', async () => {
        let dc = new DataContainer_1.DataContainer();
        let version = new DataContainer_1.Version('version1', 'appName', 'appSupportEmail', 'cdn');
        dc.version = version;
        let loginResult = new login_request_1.LoginResult();
        loginResult.success = true;
        loginResult.errorMessage = 'errorMessage';
        loginResult.sid = 'sid';
        dc.loginResult = loginResult;
        dc.user = new DataContainer_1.UserData();
        dc.user.guid = 'guid1';
        dc.user.screenName = 'wal';
        dc.user.initialData = true;
        dc.user.activated = true;
        dc.user.accounts.push({ currency: 'dash', balance: 3000000 }, { currency: 'dash', balance: 877.66 });
        dc.user.notifyUserStatus = false;
        dc.user.muteSounds = true;
        let tableViewRow = new TableViewRow_1.TableViewRow();
        tableViewRow._id = "_id1";
        tableViewRow.name = "name";
        tableViewRow.smallBlind = 1234;
        tableViewRow.smallBlindUsd = 12341;
        tableViewRow.bigBlind = 5678;
        tableViewRow.bigBlindUsd = 56781;
        tableViewRow.currency = "currency";
        tableViewRow.exchangeRate = 1.55;
        tableViewRow.timeToActSec = 5;
        tableViewRow.maxPlayers = 7;
        tableViewRow.numPlayers = 100;
        tableViewRow.maxBuyIn = 1000;
        tableViewRow.tournamentId = 'tournamentId';
        dc.tableConfigs = new DataContainer_1.TableConfigs();
        dc.tableConfigs.rows = [tableViewRow];
        let subscribeTableResult = new DataContainer_1.SubscribeTableResult();
        subscribeTableResult.tableId = 'tableId';
        subscribeTableResult.shutdownRequested = true;
        subscribeTableResult.tableConfig = tableViewRow;
        subscribeTableResult.tournamentId = 'tournamentId';
        subscribeTableResult.nextBlind = new NextBlind_1.NextBlind(20, 40, 999);
        dc.subscribeTableResult = subscribeTableResult;
        dc.game = new DataContainer_1.GameEvent('tableId');
        dc.game.pot = [1, 2, 3];
        dc.game.tocall = 1.23;
        dc.game.lastRaise = 1000000;
        dc.game.action = "action";
        dc.game.chipsToPot = true;
        dc.game.street = "street";
        let potResult1 = new DataContainer_1.PotResult();
        potResult1.seatWinners = [1, 2, 3];
        potResult1.winningHand = 'ABC';
        potResult1.bestHandCards = ["10H", "2D", "5H", "8H", "5C"];
        potResult1.amount = 1000000;
        potResult1.amountFormatted = '$1,000';
        let potResult2 = new DataContainer_1.PotResult();
        potResult2.seatWinners = [4, 5, 6];
        potResult2.winningHand = 'DEF';
        dc.game.potResults = [potResult1, potResult2];
        dc.game.dealer = 1;
        dc.game.board = ['A', 'B', 'C'];
        let seat1 = new DataContainer_1.TableSeatEvent();
        seat1.name = 'name';
        seat1.seat = 1;
        seat1.stack = 1.23;
        seat1.empty = true;
        seat1.playing = true;
        seat1.guid = 'name';
        seat1.playercards = ['AD', 'KC'];
        seat1.bet = 1.23;
        seat1.myturn = true;
        seat1.hasFolded = true;
        seat1.hasRaised = true;
        seat1.hasCalled = true;
        seat1.isSittingOut = true;
        seat1.timeToActSec = 10;
        seat1.avatar = 'avatar';
        let seat2 = Object.assign({}, seat1);
        seat2.seat = 2;
        let tableSeatEvents = new DataContainer_1.TableSeatEvents('tableId');
        tableSeatEvents.seats = [seat1, seat2];
        dc.tableSeatEvents = tableSeatEvents;
        dc.gameStarting = new DataContainer_1.GameStartingEvent('tableId');
        dc.gameStarting.isStarting = false;
        dc.gameStarting.startsInNumSeconds = 3;
        dc.gameStarting.blindsChanging = new DataContainer_1.BlindsChangingEvent(10, 20);
        dc.gameStarting.nextBlind = new NextBlind_1.NextBlind(20, 40, 15);
        dc.deal = new DataContainer_1.DealHoleCardsEvent('tableId');
        dc.deal.board = ['AD', 'KC'];
        dc.deal.holecards = ['CD', 'CC'];
        dc.error = new DataContainer_1.PokerError();
        dc.error.message = "message";
        dc.fundAccountResult = new DataContainer_1.FundAccountResult();
        dc.fundAccountResult.paymentAddress = "paymentAddress";
        dc.fundAccountResult.addressQrCode = "addressQrCode";
        dc.fundAccountResult.currency = "currency";
        dc.fundAccountResult.requiredConfirmations = 1;
        dc.accountFunded = new DataContainer_1.AccountFunded();
        dc.accountFunded.paymentReceived = 1.23;
        dc.accountFunded.balance = 4.56;
        dc.accountFunded.currency = 'currency';
        dc.accountFunded.confirmations = 10;
        dc.accountWithdrawlResult = new DataContainer_1.AccountWithdrawlResult();
        dc.accountWithdrawlResult.success = true;
        dc.accountWithdrawlResult.fees = '1.23';
        dc.accountWithdrawlResult.sentAmount = '7500000000';
        dc.accountWithdrawlResult.balance = '7500000000';
        dc.accountWithdrawlResult.errorMessage = "errorMessage";
        dc.accountWithdrawlResult.txHash = "txHash";
        dc.accountWithdrawlResult.txHashLink = "txHashLink";
        dc.accountWithdrawlResult.currency = "currency";
        dc.globalUsers = new DataContainer_1.GlobalUsers();
        dc.globalUsers.initialData = true;
        dc.globalUsers.users = [{ screenName: 'user1', online: true, countryCode: 'it', country: 'italy' }, { screenName: 'user2', online: false }];
        dc.cashOutRequestResult = new DataContainer_1.CashOutRequestResult();
        dc.cashOutRequestResult.accounts = [{ currency: 'currency', balance: 1.23, insufficientBalance: true, refundAddress: 'refundAddress', refundAddressCount: 1 }];
        dc.setTableOptionResult = new DataContainer_1.SetTableOptionResult();
        dc.setTableOptionResult.tableId = "tableId";
        dc.setTableOptionResult.sitOutNextHand = true;
        dc.setTableOptionResult.autoFold = true;
        dc.setTableOptionResult.autoCheck = true;
        dc.accountSettings = new DataContainer_1.GetAccountSettingsResult();
        dc.accountSettings.email = "email";
        dc.accountSettings.screenName = "screenName";
        dc.accountSettings.muteSounds = true;
        dc.setAccountSettingsResult = new DataContainer_1.SetAccountSettingsResult(true, "errorMessage");
        dc.tableClosed = new DataContainer_1.TableClosed('tableId');
        dc.transferFundsResult = new DataContainer_1.TransferFundsResult();
        dc.transferFundsResult.success = true;
        dc.transferFundsResult.errorMessage = 'error';
        dc.transferFundsResult.currency = 'currency';
        dc.transferFundsResult.screenName = 'screenName';
        dc.transferFundsResult.amount = 1.23;
        dc.exchangeRates = new DataContainer_1.ExchangeRateResult();
        dc.exchangeRates.rates = [{ base: 'base', target: 'target', price: 1.23, volume: 123, change: 4.56, }];
        dc.pong = new DataContainer_1.Pong();
        dc.logoutResult = new login_request_1.LogoutResult();
        dc.registerResult = new signup_request_1.RegisterResult();
        dc.registerResult.errorMessage = 'error';
        dc.registerResult.message = 'message';
        dc.registerResult.success = true;
        dc.tournamentSubscriptionResult = new DataContainer_1.TournamentSubscriptionResult();
        dc.tournamentSubscriptionResult.tournamentCount = 30;
        let tournamentViewRow = new tournmanet_view_row_1.TournamentViewRow();
        tournamentViewRow.id = 'id';
        tournamentViewRow.name = 'name';
        tournamentViewRow.currency = 'currency';
        tournamentViewRow.startTime = 'startTime';
        tournamentViewRow.totalPrize = 'totalPrize';
        tournamentViewRow.totalPrizeUsd = 'totalPrizeUsd';
        tournamentViewRow.playerCount = 10;
        tournamentViewRow.joined = true;
        tournamentViewRow.status = TournmanetStatus_1.TournmanetStatus.Complete;
        tournamentViewRow.lateRegistrationMin = 20;
        tournamentViewRow.buyIn = "0.01";
        dc.tournamentSubscriptionResult.tournaments = [
            tournamentViewRow
        ];
        dc.forgotResult = new forgot_request_1.ForgotResult();
        dc.forgotResult.errors = ['a', 'b'];
        dc.forgotResult.success = true;
        dc.forgotResult.message = 'message';
        dc.tournamentResult = new TournamentResultView_1.TournamentResultView('id1', 'tournamentName', 11, "0.01", "dash", true);
        dc.paymentHistoryResult = new DataContainer_1.PaymentHistoryResult();
        let paymentHistoryRowView = new DataContainer_1.PaymentHistoryRowView();
        paymentHistoryRowView.amount = '1.23';
        paymentHistoryRowView.confirmations = 1;
        paymentHistoryRowView.currency = 'dash';
        paymentHistoryRowView.requiredConfirmations = 2;
        paymentHistoryRowView.status = 'pending';
        paymentHistoryRowView.timestamp = new Date().toISOString();
        paymentHistoryRowView.type = 'outgoing';
        paymentHistoryRowView.txHash = 'txHash';
        paymentHistoryRowView.comment = 'comment';
        dc.paymentHistoryResult.payments = [paymentHistoryRowView];
        let tournamentInfoResult = new TournamentInfoRequest_1.TournamentInfoResult();
        tournamentInfoResult.playersPerTable = 1;
        tournamentInfoResult.startingChips = 2;
        tournamentInfoResult.timeToActSec = 3;
        tournamentInfoResult.lateRegistrationMin = 4;
        tournamentInfoResult.evictAfterIdleMin = 5;
        tournamentInfoResult.name = 'tournament 1';
        tournamentInfoResult.prizes = ["0.325", "0.1", "0.05", "0.025"];
        tournamentInfoResult.blindConfig = [
            {
                "smallBlind": 10,
                "bigBlind": 20,
                "timeMin": 20
            },
            {
                "smallBlind": 15,
                "bigBlind": 30,
                "timeMin": 20
            }
        ];
        let tournamentResultRowView2 = new TournamentInfoRequest_1.TournamentResultRowView('bar', 2);
        tournamentResultRowView2.stack = 123.45;
        tournamentInfoResult.results = [new TournamentInfoRequest_1.TournamentResultRowView('foo', 1), tournamentResultRowView2];
        dc.tournamentInfoResult = tournamentInfoResult;
        dc.duplicateIpAddress = new DataContainer_1.DuplicateIpAddress();
        let buffer = protobuf_config_1.default.serialize(dc, 'DataContainer');
        var deserialized = protobuf_config_1.default.deserialize(buffer, 'DataContainer');
        assert.deepEqual(deserialized, dc);
    });
    it('protobuf_ClientMessage', () => {
        let message = new ClientMessage_1.ClientMessage();
        message.joinTableRequest = new ClientMessage_1.JoinTableRequest();
        message.joinTableRequest.amount = 200000000000;
        message.joinTableRequest.seat = 9;
        message.joinTableRequest.tableId = "tableId";
        message.listTablesRequest = new ClientMessage_1.ListTablesRequest();
        message.subscribeToTableRequest = new ClientMessage_1.SubscribeToTableRequest();
        message.subscribeToTableRequest.tableId = "tableId";
        message.subscribeToTableRequest.tournamentId = "tournamentId";
        message.exchangeRatesRequest = new ClientMessage_1.ExchangeRatesRequest();
        message.globalChatRequest = new ClientMessage_1.GlobalChatRequest("message1", true);
        message.tournamentSubscriptionRequest = new ClientMessage_1.TournamentSubscriptionRequest();
        message.leaveTableRequest = new ClientMessage_1.LeaveTableRequest("tableId");
        message.loginRequest = new login_request_1.LoginRequest('foo@bar.com', 'password');
        message.logoutRequest = new login_request_1.LogoutRequest();
        message.registerRequest = new signup_request_1.RegisterRequest();
        message.registerRequest.screenName = 'screenName';
        message.registerRequest.email = 'email';
        message.registerRequest.password = 'password';
        message.registerRequest.confirmPassword = 'confirmPassword';
        message.registerRequest.tournamentId = 'tournamentId';
        message.forgotRequest = new forgot_request_1.ForgotRequest();
        message.forgotRequest.email = 'foo@bar.com';
        message.fold = new ClientMessage_1.FoldRequest();
        message.fold.tableId = 'tableId';
        message.bet = new ClientMessage_1.BetRequest();
        message.bet.tableId = 'tableId';
        message.bet.amount = 30000000;
        message.fundAccountRequest = new ClientMessage_1.FundAccountRequest('dash');
        message.accountWithdrawlRequest = new ClientMessage_1.AccountWithdrawlRequest();
        message.accountWithdrawlRequest.currency = 'currency';
        message.accountWithdrawlRequest.receivingAddress = 'receivingAddress';
        message.accountWithdrawlRequest.amount = '7500000000';
        message.setTableOptionRequest = new ClientMessage_1.SetTableOptionRequest('tableId', true, true, true);
        message.chatRequest = new ClientMessage_1.ChatRequest('tableId', 'message');
        message.cashOutRequest = new ClientMessage_1.CashOutRequest();
        message.getAccountSettingsRequest = new ClientMessage_1.GetAccountSettingsRequest();
        message.setAccountSettingsRequest = new ClientMessage_1.SetAccountSettingsRequest();
        message.setAccountSettingsRequest.screenName = "screenName";
        message.setAccountSettingsRequest.muteSounds = true;
        message.transferFundsRequest = new ClientMessage_1.TransferFundsRequest();
        message.transferFundsRequest.amount = 3000000;
        message.transferFundsRequest.currency = 'currency';
        message.transferFundsRequest.screenName = 'screenName';
        message.ping = new ClientMessage_1.Ping();
        message.tournamentRegisterRequest = new ClientMessage_1.TournamentRegisterRequest();
        message.tournamentRegisterRequest.tournamentId = 'tournamentId';
        message.paymentHistoryRequest = new ClientMessage_1.PaymentHistoryRequest();
        message.tournamentInfoRequest = new TournamentInfoRequest_1.TournamentInfoRequest('id1');
        message.rebuyRequest = new ClientMessage_1.RebuyRequest('abcd');
        let buffer = protobuf_config_1.default.serialize(message, 'ClientMessage');
        var deserialized = protobuf_config_1.default.deserialize(buffer, 'ClientMessage');
        assert.deepEqual(deserialized, message);
    });
});
//# sourceMappingURL=serialization-fixture.js.map