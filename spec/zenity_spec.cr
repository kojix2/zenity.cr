require "./spec_helper"

describe Zenity do
  it "has a version number" do
    (Zenity::VERSION).should be_a(String)
  end
end
