import { createStore } from 'vuex';
import axios from 'axios';
const url = `https://api.jsonbin.io/v3/b/64650d329d312622a3601d12`;
const key = '$2b$10$pABFxM8WP4rImbk4IqMBbuWmCvHQ.jHsY/lQMg4tef.22J9kLXRLq';

export default createStore({
  state: {
    user: '',
    userId: '',
    userPass: '',
    report: {},
    reports: [],
    loading: false,
  },
  mutations: {
    SET_USERNAME(state, userName) {
      state.user = userName
    },
    SET_USERID(state, userId) {
      state.userId = userId
    },
    SET_USERPASS(state, userPass) {
      state.userPass = userPass
    },
    SET_REPORT(state, report) {
      state.report = report;
    },
    SET_REPORTS(state, reports) {
      state.reports = reports;
    },
    UPDATE_REPORT(state, updatedReport) {
        state.reports = state.reports.map((report) =>
        report.id === updatedReport.id ? updatedReport : report
      );
      this.dispatch('loadReports');
    },
    IS_LOADING(state, value) {
      state.loading = value;
    },
  },
  actions: {
    async editReport({ commit }, reportId) {
      try {
        commit('IS_LOADING', true);
        this.url = url;
        this.key = key;
        const id = JSON.stringify(reportId);
        const response = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': key,
            'X-JSON-Path': `$[?(@.id==${id})]`,
          },
        });
        const report = response.data.record[0];
        commit('IS_LOADING', false);
        commit('SET_REPORT', report);
      } catch (error) {
        console.error(error);
      }
    },
    async updateReport({ commit, state }) {
      const updatedReport = {
              ...state.report,
              report_completed: false,
            };
      commit('IS_LOADING', true);
      commit('UPDATE_REPORT', updatedReport);
      this.url = url;
      this.key = key;

      await axios.put(url, state.reports, {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': key,
        },
      });
      commit('IS_LOADING', false);
    },
    async completedReports({ commit, state }) {
      const updatedReport = {
              ...state.report,
              report_completed: true,
            };
      commit('IS_LOADING', true);
      commit('UPDATE_REPORT', updatedReport);
      this.url = url;
      this.key = key;
      await axios.put(url, state.reports, {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': key,
        },
      });
      commit('IS_LOADING', false);
    },
    async loadReports({ commit }) {
      try {
        commit('IS_LOADING', true);
        this.url = url;
        this.key = key;
        const response = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': key,
          },
        });
        const reports = response.data.record;
        commit('IS_LOADING', false);
        commit('SET_REPORTS', reports);
      } catch (error) {
        commit('IS_LOADING', false);
        console.error(error);
      }
    }
  },
  getters: {
    sortedReports(state) {
      return state.reports.sort((a, b) => new Date(b.date_inspection) - new Date(a.date_inspection));
    },
    loading(state) {
      return state.loading;
    },
  }
});