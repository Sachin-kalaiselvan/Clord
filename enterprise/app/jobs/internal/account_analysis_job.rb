class Internal::AccountAnalysisJob < ApplicationJob
  queue_as :low

  def perform(account)
    return unless ClordApp.Clord_cloud?

    Internal::AccountAnalysis::ThreatAnalyserService.new(account).perform
  end
end
