import { createStore } from 'vuex';
import axios from 'axios';
import { getJsonData } from "@/services/json.service.js";

export default createStore({
  state: {
    user: '',
    userId: '',
    userPass: '',
    report: {},
    reports: []
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
    UPDATE_COMPLETED(state, completed) {
      state.report.report_completed = completed;
      this.dispatch('loadReports');
    },
    UPDATE_NO_COMPLETE(state, notCompleted) {
      state.report.report_completed = notCompleted;
      this.dispatch('loadReports');
    }
  },
  actions: {
    async editReport({ commit }, reportId) {
      try {
        const response = await axios.get(`http://localhost:3000/reports/${reportId}`);
        const report = response.data;

        commit('SET_REPORT', report);
      } catch (error) {
        console.error(error);
      }
    },
    async markReportNotComplete({ commit, state }) {
      try {
        const updatedReport = {
          ...state.report,
          report_completed: false,
        };

        await axios.put(`http://localhost:3000/reports/${updatedReport.id}`, updatedReport);

        commit('UPDATE_NO_COMPLETE', false);
      } catch (error) {
        console.error(error);
      }
    },
    async markReportCompleted({ commit, state }) {
      try {
        const updatedReport = {
          ...state.report,
          report_completed: true,
        };

        await axios.put(`http://localhost:3000/reports/${updatedReport.id}`, updatedReport);

        commit('UPDATE_COMPLETED', true);
      } catch (error) {
        console.error(error);
      }
    },
    async loadReports({ commit }) {
      getJsonData()
            .then((data) => {
                commit('SET_REPORTS', data);
            })
            .catch((error) => console.error(error));
    }
  },
  getters: {
    sortedReports(state) {
      return state.reports.sort((a, b) => new Date(b.date_inspection) - new Date(a.date_inspection));
    }
  }
});